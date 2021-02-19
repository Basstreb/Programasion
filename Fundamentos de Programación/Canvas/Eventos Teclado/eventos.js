var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{
    //console.log("Tecla oprimida");
    //console.log(evento.keyCode); averigua el keyCode presionando teclas

    /*if(evento.keyCode == teclas.UP)
    {
        console.log("Vamo pa arriba");
    }

    if(evento.keyCode == teclas.DOWN)
    {
        console.log("Vamo pa abajo");
    }

    if(evento.keyCode == teclas.LEFT)
    {
        console.log("Vamo pa la izquierda");
    }

    if(evento.keyCode == teclas.RIGHT)
    {
        console.log("Vamo pa la derecha");
    }*/

    /*switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("Vamo pa arriba");
        break;

        case teclas.DOWN:
            console.log("Vamo pa abajo");
        break;

        case teclas.LEFT:
            console.log("Vamo pa la izquierda");
        break;

        case teclas.RIGHT:
            console.log("Vamo pa la derecha");
        break;

        default:
            console.log("Otra tecla");
        break;
    }*/
    var colorcito = "red";
    var movimiento = 5;

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, (y-movimiento), papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, (y+movimiento), papel);
            y = y + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;        
        break;

        default:
            console.log("Otra tecla");
        break;
    }
}