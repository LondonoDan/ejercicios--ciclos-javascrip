/*
2.	Hacer un programa que pida N notas, calcular el promedio de las notas aprobadas y 
el promedio de las notas desaprobadas; (Aprueba con un promedio de 3).  
*/

var n = prompt("Digite la cantidad de notas");
var acumulador = numeros;
var promedio=0;

for (contador=1; contador <= n; contador++){
 var numeros = prompt("Ingrese la nota "+contador);

  promedio = parseInt(promedio) + parseInt(numeros)/n;
}
if (promedio >=3){
  document.write("El alumno aprueba con un promedio de "+promedio);
}
else{
  document.write("El alumno reprueba con un promedio de "+promedio);
}





