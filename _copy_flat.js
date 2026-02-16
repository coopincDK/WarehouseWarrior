const fs = require('fs');
const path = require('path');

const src = 'assets/images';
const dst = 'Ting der kan bruges/OPTIMER_DISSE';

if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });

function walk(dir) {
    const entries = fs.readdirSync(dir);
    for (const e of entries) {
        const fp = path.join(dir, e);
        if (fs.statSync(fp).isDirectory()) walk(fp);
        else if (e.endsWith('.png')) {
            fs.copyFileSync(fp, path.join(dst, e));
        }
    }
}

walk(src);
const count = fs.readdirSync(dst).filter(f => f.endsWith('.png')).length;
console.log(count + ' PNG-filer kopieret til én flad mappe');
