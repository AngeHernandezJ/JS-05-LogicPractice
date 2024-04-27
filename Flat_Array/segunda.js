const ARR = [1, [2, 3, [4, 5, [6]]]];
console.log(ARR);
let c=0; cont2=0;
function arregloSencillo (arr) {
    //return arr = arregloSencillo(arr.flat());
    cont1 = arr.length;
    //console.log(cont1);
    //if (c <= 10) {
    //if (cont1 != cont2) {
        cont2 = cont1;
        console.log(cont2);
       // if (c <= 10) {
    arr = arr.flat();
    cont1 = arr.length;
    console.log(cont1);
    //newArr = arr;
    //let newArr = arregloSencillo(newArr);
   // arr = arregloSencillo(arr.flat());
   // console.log(arr);
    //return arr = arr.flat();
    if (cont1 != cont2) {
        //console.log("Más");
        //console.log(arregloSencillo(arr));
        arr = arregloSencillo(arr);
        //console.log(arr);
        //return arr;
    }
    return arr;
}
/*function repetir () {
    /*if (cont1 != cont2) {
        console.log("Más");
    }*/
/*    return "Mas";
}*/

//console.log(newArr)
console.log((arregloSencillo(ARR)));
//console.log(repetir(arregloSencillo(ARR)));
//console.log(repetir);
