// Crear un módulo que exporte una función que muestra la hora actual en distintos formatos

module.exports = {
    mostrarHora: function() {
      var fecha = new Date();
      var hora = fecha.getHours();
      var minutos = fecha.getMinutes();
      var segundos = fecha.getSeconds();
  
      console.log('Hora actual: ' + hora + ':' + minutos + ':' + segundos);
      console.log('Hora en formato 24 horas: ' + hora + ':' + minutos);
      console.log('Hora en formato AM/PM: ' + ((hora > 12) ? hora - 12 : hora) + ':' + minutos + ':' + segundos + ((hora >= 12) ? ' PM' : ' AM'));
    }
  }
  