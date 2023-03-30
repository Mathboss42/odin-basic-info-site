const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const view = getView(req.url);

    if (view) {
        fs.readFile(view, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    
}).listen(8080);

function getView(url) {
    switch (url) {
        case '/':
            return 'index.html';
        case '/about':
            return 'about.html';
        case '/contact-me':
            return 'contact-me.html';
    }
}