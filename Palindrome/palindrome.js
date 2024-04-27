// PRIMERA OPCIÓN
/*let i, phrase2, phrase = prompt("Ingrese la palabra o frase");
console.log(phrase);
phrase = phrase.toLowerCase();
console.log(phrase);
phrase = phrase.replaceAll(" ","");
phrase = phrase.replaceAll(",","");
phrase = phrase.replaceAll(".","");
phrase = phrase.replaceAll(";","");
phrase = phrase.replaceAll(":","");
phrase2 = phrase.split("");
phrase2.reverse();
phrase2 = phrase2.join("");
if (phrase == phrase2) {
    console.log("True: la frase si es un palíndromo");
} else {console.log("False: la frase no es un palíndromo");}
*/

// SEGUNDA OPCIÓN
let phra2, phra = prompt("Ingrese la palabra o frase");
//let phra2, phra = "Ana";
phra = phra.toLowerCase();
phra = phra.match(/[a-z]/g);
phra2 = phra.join("");
phra.reverse();
phra = phra.join("");
//console.log(phra);
//console.log(phra2);
if (phra === phra2) {
    console.log("True: la frase es un palíndromo");
} else {
    console.log("False: la frase no es un palíndromo");
}