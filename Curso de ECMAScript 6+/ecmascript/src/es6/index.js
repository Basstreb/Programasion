//CLASE 1
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//CLASE 2
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase épica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase épica.`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Dani',
    'age': 28,
    'country': 'ES'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
//a = 'a'; Dara error, no se puede asignar ya que es una variable const y su valor no va a cambiar.

//CLASE 3
let name = 'Dani';
let age = 28;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

const names = [
    { name: 'Dani', age: 28 },
    { name: 'Elena', age: 22 }
]

console.log(names);

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

//const listOfNames3 = (name, age, country) => {...};

//const listOfNames4 = name => {...};

const square = num => num * num;
console.log(square(2));

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

//CLASE 4

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

const hello = require('./module')

console.log(hello());



function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//