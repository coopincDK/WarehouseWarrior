const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + decodeURIComponent(req.url);
    if (filePath === './') filePath = './index-new.html';
    
    const ext = path.extname(filePath).toLowerCase();
    const types = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.mp3': 'audio/mpeg',
        '.json': 'application/json'
    };
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('404:', filePath);
            res.writeHead(404);
            res.end('Not found: ' + filePath);
            return;
        }
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
        res.end(data);
    });
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
    require('child_process').exec('start http://localhost:8080');
});
