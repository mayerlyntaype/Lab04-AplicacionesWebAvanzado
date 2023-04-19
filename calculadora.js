const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
  const query = url.parse(req.url).query;
  const params = querystring.parse(query);

  const num1 = parseFloat(params.num1);
  const num2 = parseFloat(params.num2);
  const operacion = params.operacion;

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      resultado = num1 / num2;
      break;
    default:
      res.writeHead(400, { 'Content-Type': 'text/html' });
      res.write('<h1>Error: operación no válida</h1>');
      res.end();
      return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>El resultado es: ${resultado}</h1>`);
  res.end();
}).listen(8080);
