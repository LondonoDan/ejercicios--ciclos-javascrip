/*
14.	Utiliza la función Math.ramdon() 
para generar un número aleatorio y compararlo con el que el usuario digite. 
tienes 3 intentos para acertar. 
*/

var nombre = prompt ("Bienvenido al juego adivina el número, tienes 3 intentos para adivinarlo. ¿Cual es tu nombre? ");
var inicio= 1;
var finn= 10;
var aleatorio = Math.floor(Math.random() * finn - inicio + 1)+inicio;


for(intentos=1; intentos <=3; intentos++ ){
    var numero = parseInt (prompt (" Hola "+nombre+"( ͡👁 ͜ʖ ͡👁), Ingrese un número entre el "+inicio+ " y el " +finn));
    if(numero >= inicio && numero <= finn){

        if(numero < aleatorio){
            alert("el número ingresado es mas bajo al número a adivinar, intenta de nuevo");
        } else if(numero > aleatorio){
            alert("El número que ingreso es mas alto que el número a adivinar, intenta de nuevo");
        } else if (numero == aleatorio){
            break;
        }

    }
    else{
        alert("Numero incorrecto, intente de nuevo ( ͡> ͜ʖ ͡<) 👉, recuerde ingresar un número entre "+inicio +" hasta el " +finn);
    }
}

if (numero == aleatorio) {
    document.write("<br> ¡FELICIDADES, ADIVINASTE EL NÚMERO EN "+ intentos+ " INTENTOS! 👍( ͡~ ͜ʖ ͡°👍)");
    document.write("<br> EL NÚMERO ADIVINADO ES "+aleatorio);
}
else {
    document.write("<br> Agotaste el número de intentos ( ͡ಥ ͜ʖ ͡ಥ)👎 ");
    document.write("<br> El número a adivinar era "+aleatorio);
}




