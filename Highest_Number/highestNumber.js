let i = 0, numbers = prompt("Ingresa diez números separados únicamente por comas");
console.log(numbers);
numbers = numbers.split(",");
numbers.sort();
for (i = 0; i < numbers.length; i++){
    numbers[i] = parseInt(numbers[i]);
}
console.log("El número más grande es: " + numbers[numbers.length-1]);