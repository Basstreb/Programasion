var dani = {
    nombre: "Dani",
    apellido: "Lozano",
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${dani.nombre} pesa ${dani.peso}kg`);

/* function aumentarDePeso(persona) {
    return persona.peso += 200
} AMBAS COSAS SON LO MISMO*/

const VARIAR_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = persona => persona.peso += VARIAR_PESO;
const adelgazar = persona => persona.peso -= VARIAR_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = dani.peso - 3;
var dias = 0;

while (dani.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(dani);
    }
    if (realizaDeporte()) {
        adelgazar(dani);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${dani.nombre} adelgazó 3kg`);