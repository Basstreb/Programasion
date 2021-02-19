var signo = prompt("¿Cual es tu signo?")

switch (signo) {
    case "Acuario":
        console.log("Acuario")
        break

    case "Piscis":
        console.log("Piscis")
        break

    case "Cancer":
        console.log("Cancer")
        break

    case "Geminis":
    case "Géminis":
    case "geminis":
    case "géminis":
        console.log("Géminis")
        break

    default:
        console.log("No es un signo zodiacal válido");
}