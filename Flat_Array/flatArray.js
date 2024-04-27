// PRIMERA OPCIÓN: Recursiva
const ARR = [1, [2, 3, [4, 5, [6]]]];
console.log(ARR);
let c = 0; cont2 = 0;
function arregloSencillo(arr) {
    cont1 = arr.length;
    cont2 = cont1;
    //console.log(cont2);
    arr = arr.flat();
    cont1 = arr.length;
    //console.log(cont1);
    if (cont1 != cont2) {
        arr = arregloSencillo(arr);
    }
    return arr;
}
console.log(arregloSencillo(ARR));

// SEGUNDA OPCIÓN: callback
/*const ARR = [1, [2, 3, [4, 5, [6]]]];
console.log(ARR);
let c = 0; cont2 = 0;
function arregloSencillo(arr) {
    cont1 = arr.length;
    cont2 = cont1;
    arr = arr.flat();
    cont1 = arr.length;
    return arr;
}
function repetir(arr) {
    arr = arregloSencillo(arr);
    if (cont1 >= cont2) {
        arr = arregloSencillo(arr);
    }
    return arr;
}
console.log(repetir(arregloSencillo(ARR)));*/

// TERCERA OPCIÓN: callback
/*const ARR = [1, [2, 3, [4, 5, [6]]]];
console.log(ARR);
let c = 0; cont2 = 0;
function arregloSencillo(arr) {
    cont1 = arr.length;
    cont2 = cont1;
    arr = arr.flat();
    cont1 = arr.length;
    return arr;
}
function repetir(arr) {
    do {
        arr = arregloSencillo(arr);
    } while (cont1 != cont2);
    return arr;
}
console.log(repetir(arregloSencillo(ARR)));*/