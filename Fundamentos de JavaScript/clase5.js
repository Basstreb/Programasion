var nombre = "Daniel";

function imprimirNombreEnMayusculas(n) {
    n = n.toLocaleUpperCase();
    console.log(n);
}

imprimirNombreEnMayusculas(nombre);


/* var nombre = "Daniel";

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toLocaleUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombre); 

CON ESTO TAMBIEN SALDRIA YA QUE LA VARIABLE NOMBRE DENTRO DE LA FUNCION SERIA LOCAL Y NO ALTERARIA A LA VARIABLE NOMBRE GOBLAL*/