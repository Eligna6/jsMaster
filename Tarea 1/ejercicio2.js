"use strict";

console.clear();

alert("Bienvenido al ejercicio 2");

var salir = false;

var maxNum = Number.MAX_SAFE_INTEGER;

console.log(maxNum);

while (!salir) {
  var eleccion = parseInt(
    prompt(
      "Ingresa cualquier número y te diré si es par o impar.\n" +
        "Para terminar el programa, ingresa el 0 (que por cierto, es par):\n" +
        "*Nota: el máximo número es " + maxNum
    )
  );

  switch (eleccion) {
    default:
      if (isNaN(eleccion)) {
        alert("Intenta ingresar una opción válida.");
      }else if (eleccion > maxNum) {
        alert("El número ingresado sobrepasa el máximo permitido.");
      }
       else if (esPar(eleccion)) {
        alert("El número es par");
      } else {
        alert("El número es impar");
      }
      break;
    case 0:
      alert("Terminando el programa, gracias por participar.");
      salir = true;
      break;
  }
}

function esPar(num){
    return ((num%2)==0)
}
