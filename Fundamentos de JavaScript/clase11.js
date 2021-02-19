var dani = {
    nombre: "Dani",
    apellido: "Lozano",
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}

var pablo = {
    nombre: "Pablo",
    apellido: "Moreno",
    edad: 6,
}

/* function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log("Ingeniero")
    } else {
        console.log("No es Ingeniero")
    }

    if (persona.cocinero) {
        console.log("Cocinero")
    } else {
        console.log("No es Cocinero")
    }

    if (persona.cantante) {
        console.log("Cantante")
    } else {
        console.log("No es Cantante")
    }

    if (persona.dj) {
        console.log("DJ")
    } else {
        console.log("No es DJ")
    }

    if (persona.guitarrista) {
        console.log("Guitarrista")
    } else {
        console.log("No es Guitarrista")
    }

    if (persona.drone) {
        console.log("Piloto de Drone")
    } else {
        console.log("No es Piloto de Drone")
    }
}

imprimirProfesiones(dani);*/

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad (dani);
imprimirSiEsMayorDeEdad (pablo);