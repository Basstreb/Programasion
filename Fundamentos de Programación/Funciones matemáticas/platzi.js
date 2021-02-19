var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//var mapa = "tile.png"; [Ya no es necesaria]

var cantidad = aleatorio(5, 25);

var xCerdo;
var yCerdo;

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png", 
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

fondo.imagen = new Image();
    fondo.imagen.src = fondo.url;
    fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
    vaca.imagen.src = vaca.url;
    vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
    cerdo.imagen.src = cerdo.url;
    cerdo.imagen.addEventListener("load", cargarCerdos)

pollo.imagen = new Image();
    pollo.imagen.src = pollo.url;
    pollo.imagen.addEventListener("load", cargarPollos)

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    //Puede ponerse solo (fondo.cargaOK) ya que si no se especifica solo funciona con TRUE
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK)
    {
        for (var v=0; v<cantidad; v++ )
        {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca.imagen, x, y);
        }        
    }

    if(cerdo.cargaOK)
    {
        var xCerdo = aleatorio(0,480);
        var yCerdo = aleatorio(0,480);
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }

    if(pollo.cargaOK)
    {
        for (var v=0; v<cantidad; v++ )
        {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

document.addEventListener("keydown", moverCerdo);

function moverCerdo(evento)
{
    var movimiento = 5;

    switch(evento.keyCode)
    {
        case teclas.UP:
            yCerdo = yCerdo - movimiento;
            cerdo.cargaOK = true;
        break;

        case teclas.DOWN:
            yCerdo = yCerdo + movimiento;
            cerdo.cargaOK = true;
            dibujar();
        break;

        case teclas.LEFT:
            xCerdo = xCerdo - movimiento;
            cerdo.cargaOK = true;
            dibujar();
        break;

        case teclas.RIGHT:
            xCerdo = xCerdo + movimiento; 
            cerdo.cargaOK = true;
            dibujar();      
        break;
    }
}