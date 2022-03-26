/*
4. realice una tabla de multiplicar con cualquier 
número ingresado hasta el 30.
*/

var numero = prompt("Ingrese el número a multplicar");
var proceso=0;

for (contador=1; contador <=30; contador++){
    proceso = numero * contador;
    document.write("<br>"+numero+" x "+contador+ " = "+proceso)
}