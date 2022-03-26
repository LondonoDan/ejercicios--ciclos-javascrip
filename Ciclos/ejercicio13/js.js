/*
13.	 Cree un programa que pida la edad a 10 estudiantes
y determine cuántos son menores de edad y cuales son mayores de edad.

*/

var mayores=0;
var menores=0;
for (contador = 1; contador <=10; contador++){

    var edad = prompt ("Ingrese la edad del estudiante "+contador);

    if (edad >=18){
    
        mayores = mayores + 1;
        
    }
    
    else{
        
        menores++;
    }

}

document.write("<br> La cantidad de estudiantes mayores de edad son "+mayores);
document.write("<br> La cantidad de estudiantes menores de edad son "+menores);