"use strict";

alert("Bienvenido al ejercicio 3");

var num1, num2;
var metodos = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

var salir = false;

while (!salir) {
  var eleccion = parseInt(
    prompt("Ingresa un número para iniciar o el 0 para terminar el programa:\n")
  );

  switch (eleccion) {
    case 0:
      alert("Terminando el programa, gracias por participar.");
      salir = true;
      break;

    default:
      if (isNaN(eleccion)) {
        alert("Intenta ingresar una opción válida.");
      } else {
        num1 = eleccion;
        var num2 = parseInt(prompt("Ahora ingresa un segundo número:"));

        if (isNaN(num2)) {
          alert("Intenta ingresar una opción válida.");
        } else {
          var listaNum = [num1, num2];

          alert("Números ingresados: " + listaNum[0] + " y " + listaNum[1] + 
          "\n Suma: " + listaNum.reduce(metodos.sumar) +
          "\n Resta: " + listaNum.reduce(metodos.restar) +
          "\n Multiplicación: " + listaNum.reduce(metodos.multiplicar) +
          "\n División: " + listaNum.reduce(metodos.dividir));
        }
      }
      break;
  }
}
