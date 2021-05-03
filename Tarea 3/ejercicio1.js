"use strict";

console.clear();

var original = [80, 3, 14, 22, 30];

/*
    determinar cuales de esos números son pares,
    de esos números que solo me sume los > 20
*/

alert("Bienvenido a la demostración del ejercicio 1.\n"+
 "Este programa trabajará con el siguiente arreglo: ["+
  original.toString()+
  "].\nDeterminará cuáles números son pares, y de aquellos, sumará los que sean mayor a 20.");
alert("Procesando...");
var filtrado = original.filter((num) => num%2==0);
var suma = filtrado.reduce((anterior, actual) => {return anterior+actual;});
alert("Los números pares son: "+filtrado.toString()+
"\ny la suma de éstos es igual a: "+suma+
"\nGracias por su atención, hasta la próxima.")



function sumaMayorA20(...numeros){
    var filtrado = numeros.filter((num) => num>20);
    var suma = filtrado.reduce((anterior, actual) => {return anterior+actual;})
    return suma;
}

