
// Esta función se ejecuta cuando la página ha terminado de cargarse
window.onload = function () {
    let numeroValido = false; // Variable para controlar si el número ingresado es válido

    // Ciclo que se repetirá hasta que el usuario ingrese un número entero positivo válido
    while (!numeroValido) {

        // Solicitar al usuario que ingrese un número entero positivo
        const numero = prompt("Ingrese un número entero positivo:");

        // Verificar si el número ingresado es válido
        if (numero == null || isNaN(numero) || numero < 0 || numero == '') {
            // Si el número es nulo (usuario canceló), no es un número, es negativo o está vacío, vuelve a solicitar
        } else {
            // Si el número es válido, llama a la función para calcular el factorial
            calcularFactorial(numero);
            numeroValido = true; // Cambiar a verdadero para salir del ciclo
        }
    }
};

// Función para calcular el factorial de un número
function calcularFactorial(n) {
    let factorial = 1; // Inicializamos el factorial en 1

    // Limpiar el contenido previo de la etiqueta con id "pasos"
    document.getElementById("pasos").innerHTML = "";

    // Iterar desde 2 hasta el número ingresado para calcular el factorial
    for (let i = 2; i <= n; i++) {
        // Mostrar en el HTML los pasos de la multiplicación del factorial
        document.getElementById("pasos").innerHTML += "<p>" + factorial + " x " + i + " = " + (factorial * i) + "</p>";
        factorial = factorial * i; // Actualizar el valor del factorial
    }

    // Mostrar el resultado final del factorial en el HTML
    document.getElementById("pasos").innerHTML += "El factorial de " + n + " es: " + factorial;
}
