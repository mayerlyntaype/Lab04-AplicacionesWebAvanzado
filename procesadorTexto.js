// textProcessor.js

exports.dividirPalabras = function(texto) {
    return texto.split(" ");
  };
  
  exports.extraerCadenaTexto = function(texto, inicio, fin) {
    return texto.substring(inicio, fin);
  };
  
  exports.eliminarEspacios = function(texto) {
    return texto.trim();
  };
  
  exports.capitalizar = function(texto) {
    return texto.toUpperCase();
  };
  
  exports.minusculear = function(texto) {
    return texto.toLowerCase();
  };
  
  exports.mayusculaPrimeraLetra = function(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };
  
  exports.contarCaracteres = function(texto) {
    return texto.length;
  };
  