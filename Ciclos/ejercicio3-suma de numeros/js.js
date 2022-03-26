/*
3.	Ingrese cuantos numeros desea sumar
*/

var cantidadnum = prompt ("cuantos números desea ingresar?");
var suma=0;

for (contador=1; contador <= cantidadnum; contador++){
    var numeros = prompt ("Ingrese los números que desee")

  suma = parseInt (suma)  + parseInt (numeros);

}

document.write("La suma se los números ingresados es de "+suma);