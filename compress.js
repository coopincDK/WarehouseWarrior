const tinify = require('tinify');
const fs = require('fs');
const path = require('path');

tinify.key = 'XnB8j7tQRQMZWPw6yfcSTYthjqBN0KcM';

// Find alle PNG-filer i assets/images/
function getAllPngs(dir) {
    let results = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            results = results.concat(getAllPngs(fullPath));
        } else if (item.name.toLowerCase().endsWith('.png')) {
            results.push(fullPath);
        }
    }
    return results;
}

async function compressAll() {
    const files = getAllPngs('assets/images');
    console.log(`Fundet ${files.length} PNG-filer at komprimere...\n`);
    
    let totalBefore = 0;
    let totalAfter = 0;
    let success = 0;
    let failed = 0;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sizeBefore = fs.statSync(file).size;
        totalBefore += sizeBefore;
        
        const shortName = file.replace('assets\\images\\', '').replace('assets/images/', '');
        process.stdout.write(`[${i+1}/${files.length}] ${shortName} (${(sizeBefore/1024/1024).toFixed(1)} MB) → `);
        
        try {
            const source = tinify.fromFile(file);
            await source.toFile(file);
            
            const sizeAfter = fs.statSync(file).size;
            totalAfter += sizeAfter;
            const saved = ((1 - sizeAfter/sizeBefore) * 100).toFixed(0);
            console.log(`${(sizeAfter/1024/1024).toFixed(1)} MB (${saved}% sparet) ✅`);
            success++;
        } catch (err) {
            totalAfter += sizeBefore; // Tæl original størrelse ved fejl
            console.log(`FEJL: ${err.message} ❌`);
            failed++;
        }
    }
    
    console.log('\n========================================');
    console.log(`✅ Komprimeret: ${success} filer`);
    if (failed > 0) console.log(`❌ Fejlede: ${failed} filer`);
    console.log(`📦 Før:  ${(totalBefore/1024/1024).toFixed(1)} MB`);
    console.log(`📦 Efter: ${(totalAfter/1024/1024).toFixed(1)} MB`);
    console.log(`💾 Sparet: ${((totalBefore-totalAfter)/1024/1024).toFixed(1)} MB (${((1-totalAfter/totalBefore)*100).toFixed(0)}%)`);
    console.log(`🔑 API kald brugt denne måned: ${tinify.compressionCount}`);
}

compressAll().catch(console.error);
