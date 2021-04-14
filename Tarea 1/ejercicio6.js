"use strict";

console.clear();

alert("Bienvenido al ejercicio 6");

var num, listaNum, eleccion, salir;
listaNum = new Array();
salir = false;

while (!salir) {
  eleccion = prompt(
    "Ingresa un número entre el 0 y el 9, o la letra f para terminar el programa:\n"
  );

  if (isNaN(parseInt(eleccion))) {
    eleccion = eleccion.toUpperCase();
  }

  switch (eleccion) {
    case "F":
      alert("Terminando el programa, gracias por participar.");
      salir = true;
      break;

    default:
      if (isNaN(parseInt(eleccion)) || 0 > eleccion || eleccion > 9) {
        alert("Intenta ingresar una opción válida.");
      } else {
        num = eleccion;

        if (listaNum.includes(num)) {
          alert("El número ingresado ya se encuentra en la lista.\n"+
          "Los números ingresados hasta ahora son: " + listaNum.join(", "))
        } else {
          listaNum.push(num);
          alert("El número ingresado ha sido agregado a la lista.\n"+
          "Los números ingresados hasta ahora son: " + listaNum.join(", "))
        }

        if (listaNum.length == 10) {
          alert(
            "¡Felicidades!, has llenado la lista con los 10 números posibles.\n"+
            "Los números que ingresaste fueron: " + listaNum.join(", ") + ".\n" +
            "Gracias por participar, hasta la próxima."
          );
          salir = true;
          break;
        }
      }
      break;
  }
}
