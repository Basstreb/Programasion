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

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(dani);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: "Pepito" });
// imprimirNombreEnMayusculas({ apellido: "Gomez" }); //Da error porque no tiene el atributo nombre que es el que estamos pidiendo

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}