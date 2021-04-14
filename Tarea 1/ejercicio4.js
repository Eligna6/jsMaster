"use strict";

console.clear();

alert("Bienvenido al ejercicio 4");

var num1;

function tablaDel(num1) {
  console.log("TABLA DEL " + num1);
  for (var i = 1; i <= 10; i++) {
    console.log(i + " * " + num1 + " = " + i * num1);
  }
  console.log("~~~~~~~~~~~~~~~~~~~~");
}

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
        tablaDel(num1);
        alert(
          "En la consola puede revisar la tabla del 1 al 10 para el número " +
            num1 +
            "."
        );
      }
      break;
  }
}
