const http = require('http');
const url = require('url');

const DIAS_DE_LA_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

http.createServer(function(req, res) {
  const q = url.parse(req.url, true).query;
  const inputDate = new Date(q.date);
  const currentDate = new Date();
  const diffTime = inputDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

  const fecha = `${DIAS_DE_LA_SEMANA[inputDate.getDay()]} ${inputDate.getDate()} de ${MESES[inputDate.getMonth()]} de ${inputDate.getFullYear()}`;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>${diffDays} dias faltantes para el ${fecha}</h1>`);
  res.end();
}).listen(8080);
