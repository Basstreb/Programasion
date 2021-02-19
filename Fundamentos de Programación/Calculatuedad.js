var edad = document.getElementById("texto_edad");
var boton_edad = document.getElementById("boton_edad");

boton_edad.addEventListener("click", resultadoEdad);

function resultadoEdad() {
    edad_final = 2020 - parseInt(edad.value);
    document.write(edad_final);
}