const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  // Seleccionar el archivo HTML basado en la URL
  let filename = '';
  switch (req.url) {
    case '/inicio':
      filename = 'inicio.html';
      break;
    case '/galeria':
      filename = 'fotos.html';
      break;
    default:
      filename = '404.html';
  }

  // Leer el archivo HTML y enviarlo al navegador
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
console.log('Servidor en ejecución en el puerto 8080');
