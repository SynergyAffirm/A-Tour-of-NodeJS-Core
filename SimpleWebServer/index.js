const https = require('https');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Client Side Directory Paths
const bodyType = {
    'html': 'text/html',
     'jpeg': 'image/jpeg',
     'jpg': 'image/jpg',
     'png': 'image/png',
     'js': 'text/javascrpt',
     'css': 'text/css'
};

// http server to handle client server request
https.createServer((req, res) => {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), unescape(uri));
    console.log('Loading' + uri);
    var stats;


    try {
        stats = fs.lstatSync(filename);
    } catch (error) {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
        return;
    }

    if( stats.isFile()) {
        var bodyType = bodyType[path.extname(filename).split(".").reverse()[0]];
        res.writeHead(200, {'content-type': bodyType});

        var fileStream = fs.createReadStream(filename);
        filestream.pipe(res)
    } else if(stats.isDirectory()) {
        res.writeHead(302, {
            'Location': 'index.html',
            
        });
        res.end();
    } else {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.write('500 Internal Server error');
        res.end();
    
    }
}).listen(1337);