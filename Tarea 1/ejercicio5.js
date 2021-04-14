"use strict";

console.clear();

alert("Bienvenido al ejercicio 5");

var num, cantidadNum, listaNum, suma, promedio;
var salir = false;

while (!salir) {
  var eleccion = parseInt(
    prompt(
      "Ingrese entre cuántos números le gustaría calcular el promedio o el 0 para terminar el programa:\n"
    )
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
        cantidadNum = eleccion;
        listaNum = new Array();

        for (let i = 0; i < cantidadNum; i++) {
          num = parseInt(prompt("Ingresa un número:"));
          if (isNaN(num)) {
            alert("Intenta ingresar una opción válida.");
          } else {
            listaNum.push(num);
          }
        }
          suma = listaNum.reduce((anterior, actual) => actual += anterior);
          promedio = suma / cantidadNum;

          alert(
            "Los números ingresados fueron: " +
              listaNum.join(', ') +
              ".\n" +
              "Y el promedio entre éstos da: " +
              promedio
          );
        
      }
      break;
  }
}
