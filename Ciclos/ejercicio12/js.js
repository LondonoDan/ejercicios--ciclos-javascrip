/*
12.	 Cree tabla de números del 1 al 15 mínimo en HTML
*/

var fila =3;
var col= 5;
var num=1;
document.write("<table border='1'>");
for(var contador = 1; contador <=fila; contador++){
    document.write(" <tr> ");
    
   for(var contador2 = 1; contador2 <=col; contador2++){
       document.write("<td> "+(num++)+ " </td> ");
   }
   
 document.write(" </tr> ");
}

document.write(" </table> ");