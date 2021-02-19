var cuadrito = document.getElementById("areaRaton");
var papel = cuadrito.getContext("2d");
var x;
var y;
var pintar = 0;
var colorcito = "red";

console.log(pintar);

cuadrito.addEventListener("mousedown", dibujarRaton);
cuadrito.addEventListener("mouseup", noDibujar);

function dibujarRaton (evento)
{
    console.log("X es " + evento.offsetX);
    console.log("Y es " + evento.offsetY);
    pintar = 1;
    cuadrito.addEventListener("mousemove", dibujando);
}

function dibujando (evento)
{
    if(pintar == 1)
    {
        dibujarLinea(colorcito, evento.offsetX, evento.offsetY, evento.offsetX + 2, evento.offsetY + 2, papel);
    }
    else{

    }
}

function noDibujar (evento)
{
    pintar = 0;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, papel)
{
	papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.closePath();
}

dibujarLinea(colorcito, x, y, x+2, y+2, papel);

if (pintar == 1)
{
    dibujarLinea(colorcito, x, y, x+2, y+2, papel);
}