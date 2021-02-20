function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

hered aDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
}

/* var dani = new Persona("Daniel", "Lozano", 1.78);
var erika = new Persona("Erika", "Luna", 1.7);
var arturo = new Persona("Arturo", "Martinez", 1.82); */