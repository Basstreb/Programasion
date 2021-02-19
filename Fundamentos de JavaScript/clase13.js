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

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(dani)
    } else if (random < 0.5) {
        adelgazar(dani)
    }
}

console.log(`Al final del año ${dani.nombre} pesa ${dani.peso.toFixed(1)}kg`);