class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        //TAMBIEN SE PUEDE DEJAR ASI SIN PONER LAS VARIABLES
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto() {
        this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        /* var nombre = this.nombre
        var apellido = this.apellido */
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mirá, no sabia que eras Dev`);
    }
}

var dani = new Persona("Daniel", "Lozano", 1.78);
var erika = new Persona("Erika", "Luna", 1.7);
var arturo = new Desarrollador("Arturo", "Martinez", 1.82);


dani.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);