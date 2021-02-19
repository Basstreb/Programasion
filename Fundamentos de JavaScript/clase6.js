var dani = {
    nombre: "Dani",
    apellido: "Lozano",
    edad: 28
}

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad: 27
}

/* function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(dani.nombre);
imprimirNombreEnMayusculas(dario.nombre); */

/* function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(dani);
imprimirNombreEnMayusculas(dario); */

/* function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toLocaleUpperCase());
}

imprimirNombreEnMayusculas(dani);
imprimirNombreEnMayusculas(dario); */

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toLocaleUpperCase());
}

imprimirNombreEnMayusculas(dani);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Pepito" });
imprimirNombreEnMayusculas({ apellido: "Gomez" }); //Da error porque no tiene el atributo nombre que es el que estamos pidiendo