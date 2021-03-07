let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()) //POR DEFECTO 1 NIVEL
console.log(array.flat(0))//SIN NINGUN NIVEL
console.log(array.flat(1))//IGUAL QUE NO PONER NADA
console.log(array.flat(2))//NIVEL MAXIMO EN ESTE CASO
console.log(array.flat(3))//IGUAL QUE EL ANTERIOR

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = '            Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World        ';
console.log(hello);
console.log(hello.trimEnd());

//NO TENEMOS PORQUE USAR catch(error) con ES10
try {

} catch {
    error
}

//FROM ENTRIES, TRANSFORMA CLAVE VALOR EN UN OBJETO
let entries = [["name", "Dani"], ["age", 28]];

console.log(Object.fromEntries(entries));

//OBJETO DE TIPO SIMBOLO QUE NOS PERMITE ACCEDER A UNS DESCRIPCION
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);