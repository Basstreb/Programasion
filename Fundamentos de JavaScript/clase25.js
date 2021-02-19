class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
    }
}

/* var dani = new Persona("Daniel", "Lozano", 1.78);
var erika = new Persona("Erika", "Luna", 1.7);
var arturo = new Persona("Arturo", "Martinez", 1.82); */