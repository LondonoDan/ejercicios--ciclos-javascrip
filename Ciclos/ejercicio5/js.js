/*
5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.
*/

var numero = prompt("Ingrese el número a multplicar");
var proceso=0;

for (contador=1; contador <=10; contador++){
    proceso = numero * contador;

    
}
for( contador=-1; contador <=1; contador--){
    document.write("<br>"+numero+" x "+contador+ " = "+proceso)
}