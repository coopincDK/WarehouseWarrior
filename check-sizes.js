const fs = require('fs');
const path = require('path');

function getFilesRecursive(dir) {
    let results = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            if (item !== '_unused_assets' && item !== 'node_modules') {
                results = results.concat(getFilesRecursive(full));
            }
        } else if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(item)) {
            results.push({ path: full, size: stat.size });
        }
    }
    return results;
}

const files = getFilesRecursive('assets');
files.sort((a, b) => b.size - a.size);

let totalSize = 0;
console.log('\n=== ALLE BILLEDER SORTERET EFTER STØRRELSE ===\n');
files.forEach(f => {
    const sizeMB = (f.size / 1024 / 1024).toFixed(2);
    const sizeKB = (f.size / 1024).toFixed(0);
    totalSize += f.size;
    const flag = f.size > 500000 ? ' ⚠️ STOR' : f.size > 200000 ? ' ⚡' : '';
    console.log(`${sizeMB} MB (${sizeKB} KB) - ${f.path}${flag}`);
});

console.log(`\n=== TOTAL: ${(totalSize / 1024 / 1024).toFixed(1)} MB i ${files.length} filer ===`);
console.log(`Over 500KB: ${files.filter(f => f.size > 500000).length} filer`);
console.log(`Over 200KB: ${files.filter(f => f.size > 200000).length} filer`);
console.log(`Under 200KB: ${files.filter(f => f.size <= 200000).length} filer`);
