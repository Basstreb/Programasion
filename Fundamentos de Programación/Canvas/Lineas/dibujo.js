var d = document.getElementById("dibujito");
//getElementById metodo del documento que trae un elemento a traves de su Id 
var lienzo = d.getContext("2d");
//getContext metodo del canvas dela variable d
//console.log(lienzo);

var lineas = 30;
var l = 0;
var xi, yi, xf, yf;
var colorcito = "red"

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

while(l <= lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	l++; //l = l + 1;
}

for (l = 0; l <= lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("purple", 300, yi, xf, 0);
}

for (l = 0; l <= lineas; l++)
{
	yi = 300 - (l * 10);
	xf = 10 * l;
	dibujarLinea("blue", 0, yi, xf, 0);
}

for (l = 0; l <= lineas; l++)
{
	xi = 10 * l;
	yf = 300 - (l * 10);
	dibujarLinea("green", xi, 300, 300, yf);
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);

dibujarLinea("purple", 299, 1, 299, 300);
dibujarLinea("purple", 1, 1, 299, 1);

