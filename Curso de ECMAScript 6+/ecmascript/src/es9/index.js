//ES9 
//Operador de reposo, extrae las cosas de un objeto no construido

const obj = {
    name: 'Dani',
    age: 28,
    country: 'ES',
};

let { name, ...all } = obj;
console.log(name, all);

let { country, ...all } = obj;
console.log(all);

//////Propiedades de propagacion
const obj = {
    name: 'Dani',
    age: 28,
}

const obj1 = {
    ...obj,
    country: 'ES',
}

console.log(obj1);

//PROMISE.FINALIE
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    });
};

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> %s año %s mes %s dia', year, month, day);