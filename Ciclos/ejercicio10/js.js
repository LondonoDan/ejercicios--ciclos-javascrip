/*
Cree un programa que permite registrar el número de compras que se venden cada día. 
pedir al usuario cuantos productos va a comprar y registrar el precio unitario, 
calcular el valor total de cada compra y al finalizar el día calcular cuántas 
facturas se hicieron y el total general.
factura #1
No. Productos: 3
valor  p1 : 4,500
valor p2: 2,000
valor p3: 3,500
total compra: 10.000
factura #2
No. Productos: 2
valor  p1 : 1,500
valor p2: 2,000
total compra: 3.500
Total Ventas del dia: 2
Total General del dia: 13.500
*/

var compra = prompt("Cuantos productos desea comprar");
var contador=1;
var totalcompra=0;
var totalventas=0;

while (compra !=="no"){
  var contador2= 1;
  var totalpro=0;
  document.write(" <br> Factura "+contador+ " <br> ");
  document.write(" <br>  número de productos"+compra);
  while(contador2 < parseInt (compra)){
      var producto = prompt("Digite el valor del producto")
      document.write(" <br> el valor del producto "+contador2+ " es:" +producto+ " <br> ");
      totalpro = totalpro + producto;
      contador2++;
  }
  totalcompra = totalcompra + totalpro;
  totalventas = totalventas + totalcompra;
  document.write("total compra "+totalcompra);
compra = prompt("cuantos productos desea comprar");
contador++;

}
document.write(" <br>  Número de ventas" +con+ " <br>");
document.write(" <br>  total ventas "+totalventas+ " <br>");
