//CLASE DE ES8
//object.entries devuelve valor y clave matriz

const data = {
    frontend: 'Dani',
    backend: 'Salcedo',
    design: 'Manolo'
}

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);

const data = {
    frontend: 'Dani',
    backend: 'Salcedo',
    design: 'Manolo'
}

//Objetc Values: Me devuelve los valores de un objeto a un arreglo.
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.
const string = 'hello';
console.log(string.padStart(9, 'hi'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

const obj = {
    name: 'Oscar',
}

//CLASE DE ASYNC Y AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

/////////////////////////

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();