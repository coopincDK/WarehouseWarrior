const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'XnB8j7tQRQMZWPw6yfcSTYthjqBN0KcM';
const MIN_SIZE = 500000; // 500KB+

function getImages(dir) {
    let results = [];
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory() && item !== '_unused_assets' && item !== 'node_modules') {
            results = results.concat(getImages(full));
        } else if (/\.(png|jpg|jpeg)$/i.test(item) && stat.size >= MIN_SIZE) {
            results.push({ path: full, size: stat.size });
        }
    }
    return results;
}

function compressFile(filePath) {
    return new Promise((resolve, reject) => {
        const fileData = fs.readFileSync(filePath);
        const auth = Buffer.from('api:' + API_KEY).toString('base64');
        
        const req = https.request({
            hostname: 'api.tinify.com',
            path: '/shrink',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + auth,
                'Content-Type': 'application/octet-stream',
                'Content-Length': fileData.length
            }
        }, (res) => {
            let body = '';
            res.on('data', d => body += d);
            res.on('end', () => {
                if (res.statusCode === 201) {
                    const result = JSON.parse(body);
                    const downloadUrl = result.output.url;
                    // Download compressed version
                    https.get(downloadUrl, (dlRes) => {
                        const chunks = [];
                        dlRes.on('data', c => chunks.push(c));
                        dlRes.on('end', () => {
                            const compressed = Buffer.concat(chunks);
                            fs.writeFileSync(filePath, compressed);
                            resolve({
                                original: fileData.length,
                                compressed: compressed.length,
                                saved: fileData.length - compressed.length
                            });
                        });
                        dlRes.on('error', reject);
                    });
                } else if (res.statusCode === 429) {
                    reject(new Error('RATE_LIMIT'));
                } else {
                    reject(new Error(`API error ${res.statusCode}: ${body}`));
                }
            });
        });
        req.on('error', reject);
        req.setTimeout(120000, () => { req.destroy(); reject(new Error('TIMEOUT')); });
        req.write(fileData);
        req.end();
    });
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
    const files = getImages('assets');
    files.sort((a, b) => b.size - a.size);
    
    console.log(`\nFundet ${files.length} billeder over 500KB\n`);
    
    let totalOriginal = 0, totalCompressed = 0, done = 0, failed = 0;
    
    for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const sizeMB = (f.size / 1024 / 1024).toFixed(1);
        process.stdout.write(`[${i+1}/${files.length}] ${path.basename(f.path)} (${sizeMB} MB) → `);
        
        try {
            const result = await compressFile(f.path);
            const newMB = (result.compressed / 1024 / 1024).toFixed(1);
            const pct = Math.round((1 - result.compressed / result.original) * 100);
            console.log(`${newMB} MB (${pct}% sparet) ✅`);
            totalOriginal += result.original;
            totalCompressed += result.compressed;
            done++;
        } catch (e) {
            if (e.message === 'RATE_LIMIT') {
                console.log('Rate limit - venter 60s...');
                await sleep(60000);
                i--; // Retry
                continue;
            }
            console.log(`FEJL: ${e.message} ❌`);
            failed++;
        }
        
        // Small delay between requests
        if (i < files.length - 1) await sleep(500);
    }
    
    const savedMB = ((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(1);
    const totalMB = (totalOriginal / 1024 / 1024).toFixed(1);
    const newTotalMB = (totalCompressed / 1024 / 1024).toFixed(1);
    
    console.log(`\n${'='.repeat(50)}`);
    console.log(`✅ Færdig! ${done} filer komprimeret, ${failed} fejlede`);
    console.log(`📦 Før: ${totalMB} MB → Efter: ${newTotalMB} MB`);
    console.log(`💾 Sparet: ${savedMB} MB (${Math.round((1 - totalCompressed/totalOriginal) * 100)}%)`);
}

main().catch(console.error);
