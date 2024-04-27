const N_NUMBER = prompt("Ingrese un número entero");
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
}
console.log("Resultado: " + factorial(N_NUMBER));