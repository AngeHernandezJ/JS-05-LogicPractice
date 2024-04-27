let userName = prompt("Ingresa tu nombre de usuario:");
let age = prompt("Ingresa tu edad:");
let movies = prompt("Ingresa el nombre de tus películas favoritas. Separa los nombres con una coma");
let moviesARR = movies.split(",");
console.log("Hola " + userName);
console.log("Tu edad es: " + age + " años");
//console.log(moviesARR);
moviesARR.forEach((e) => (console.log(`The film ${e} is also one of my favorites`)));