"use strict";

console.clear();

alert("Bienvenido al ejercicio 1")
var num1 = parseInt(prompt("Ingrese un primer número:"));
var num2 = parseInt(prompt("Y ahora un segundo número:"));

var salir = false;

while (!salir) {
  var eleccion = parseInt(
    prompt(
      "Ingrese 1 para sumar los números ingresados \n" +
        "2 para restarlos \n" +
        "3 para multiplicarlos \n" +
        "o 0 para salir"
    )
  );

  switch (eleccion) {
    case 1:
      suma(num1, num2);
      break;
    case 2:
      resta(num1, num2);
      break;
    case 3:
      multiplica(num1, num2);
      break;
    case 0:
      alert("Terminando el programa, gracias por participar.");
      salir = true;
      break;
    default:
      alert("Intenta ingresar una opción válida.");
      break;
  }
}

function suma(num1, num2) {
  return alert("La suma de los 2 números es: " + (num1 + num2));
}

function resta(num1, num2) {
  return alert("La resta entre los 2 números es: " + (num1 - num2));
}

function multiplica(num1, num2) {
  return alert("La multiplicación entre los 2 números es: " + num1 * num2);
}

function divide(num1, num2) {
  return alert("La división entre los 2 números da: " + num1 / num2);
}