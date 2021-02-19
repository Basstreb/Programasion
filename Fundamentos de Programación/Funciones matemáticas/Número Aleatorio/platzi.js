var z;

for(var i = 0; i < 3; i++)
{
    z = aleatorio(1, 6);
    document.write(z + ", ");
}

document.write(z);

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}