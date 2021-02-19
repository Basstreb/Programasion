var dani = {
    nombre: "Daniel",
    apellido: "Lozano",
    edad: 28
}

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad: 27
}

function imprimirNombreYEdad(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    var { edad } = persona;
    var { apellido } = persona;
    console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años`);
}

/* function imprimirNombreYEdad({ nombre, edad }) {
    console.log(`Holita, me llamdo ${nombre} y tengo ${edad} años`)
} 
UNA FORMA MAS CORTA DE HACERLO*/

imprimirNombreYEdad(dani);
imprimirNombreYEdad(dario);
// imprimirNombreEnMayusculas({ nombre: "Pepito" });
// imprimirNombreEnMayusculas({ apellido: "Gomez" }); //Da error porque no tiene el atributo nombre que es el que estamos pidiendo