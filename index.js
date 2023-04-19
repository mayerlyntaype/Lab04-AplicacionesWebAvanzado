// index.js

const http = require("http");
const url = require("url");
const textProcessor = require("./procesadorTexto");

http.createServer(function (req, res) {
  const q = url.parse(req.url, true).query;
  const texto = q.texto || "";

  let resultado = "";

  switch (q.operacion) {
    case "dividirPalabras":
      resultado = textProcessor.dividirPalabras(texto).join(", ");
      break;
    case "extraerCadenaTexto":
      resultado = textProcessor.extraerCadenaTexto(
        texto,
        parseInt(q.inicio),
        parseInt(q.fin)
      );
      break;
    case "eliminarEspacios":
      resultado = textProcessor.eliminarEspacios(texto);
      break;
    case "capitalizar":
      resultado = textProcessor.capitalizar(texto);
      break;
    case "minusculear":
      resultado = textProcessor.minusculear(texto);
      break;
    case "mayusculaPrimeraLetra":
      resultado = textProcessor.mayusculaPrimeraLetra(texto);
      break;
    case "contarCaracteres":
      resultado = textProcessor.contarCaracteres(texto);
      break;
    default:
      resultado = "Operación no válida";
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>Resultado: ${resultado}</h1>`);
  res.end();
}).listen(8080);
