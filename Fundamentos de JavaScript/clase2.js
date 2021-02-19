console.log("Hola mundo JS!");

var nombre = "Daniel";
var apellido = "Lozano";

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinuscula = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto1 = nombre + " " + apellido;
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

var ultimaLetraDelNombre1 = nombre.charAt(nombre.length - 1);
//Otra opcion valida es
var ultimaLetraDelNombre2 = nombre.substr(-1);