/*
3.Ingrese varios números enteros y muestre la cantidad de números 
ingresados y la suma de los mismos. 
Realice esta acción hasta que el usuario ingrese la palabra FIN.
*/

var numeros = prompt("Digite un número");
var acumulador = 0;
var suma=0;

for (contador = 1; numeros !== "FIN"; contador++) {
    acumulador = numeros; 
    suma =  parseInt (suma) + parseInt (numeros);
    numeros = prompt ("Digite un número");
    document.write("<br> Los números que digito son "+acumulador+ " <br> ")

}

document.write("<br> La suma de los números digitados es: "+suma)