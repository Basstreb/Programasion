var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;//coges el ancho del canvas
var lienzo = d.getContext("2d");//coges el canvas


function dibujoPorClick()
{
	var xxx = parseInt(texto.value);
	//alert("No me toques ahí"); Lo usamos para saber que funciona correctamente
	//texto.value saca el valor que se introduzca en el cuadro creado en html
	var lineas = xxx;
	var l = 0;
	var xi, yi, xf, yf;
	var colorcito = "red"
	var espacio = ancho/lineas;

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
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	l++; //l = l + 1;
	}

	for (l = 0; l <= lineas; l++)
{
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea("purple", 300, yi, xf, 0);
	}

	for (l = 0; l <= lineas; l++)
{
	yi = 300 - (l * espacio);
	xf = espacio * l;
	dibujarLinea("blue", 0, yi, xf, 0);
	}

	for (l = 0; l <= lineas; l++)
{
	xi = espacio * l;
	yf = 300 - (l * espacio);
	dibujarLinea("green", xi, 300, 300, yf);
	}

dibujarLinea(colorcito, 1, 1, 1, (ancho-1));
dibujarLinea(colorcito, 1, (ancho-1), (ancho-1), (ancho-1));

dibujarLinea("purple", 299, 1, 299, 300);
dibujarLinea("purple", 1, 1, 299, 1);
}