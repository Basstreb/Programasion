var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++
} while (!llueve())


var frecuencia = contador === 1 ? "vez" : "veces";

/* var frecuencia;
if (contador === 1) {
    frecuencia = "vez";
} else {
    frecuencia = "veces";
} */

console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);