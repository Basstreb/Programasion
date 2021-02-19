var d = document.getElementById("dibujito");
//getElementById metodo del documento que trae un elemento a traves de su Id 
var lienzo = d.getContext("2d");
//getContext metodo del canvas dela variable d
console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	//funciones y atributos
	lienzo.beginPath();//para invocarlas son necesarios los parentesis
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
	//Si quieres que la linea no continue hay que empezar y cerrar el Path
}

dibujarLinea("green" , 10 , 300, 220, 10);
dibujarLinea("yellow" , 300 , 10, 10, 220);