/*
 * Ejercicio 1

Utilizando lo aprendido escribir el código necesario para que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión
 */



/* CODIGO EJERCICIO 1   */

alert ("Pone una cantidad numerica");
let recorrer = prompt ("cuantos metros tenes que recorrer");

if (recorrer >= 0 && recorrer <1000) {
    alert ("recorrer a pie")
}
else if (recorrer >= 1000 && recorrer <10000) {
    alert ("recorrer en bicicleta")
}
else if (recorrer >= 10000 && recorrer <30000) {
    alert ("recorrer en colectivo")
}
else if (recorrer >= 30000 && recorrer <100000) {
    alert ("recorrer en auto")
}
else if (recorrer > 100000) 
    alert ("recorrer en Avion")




/* EJERCICIO 2 
*/

const numeros = [1, 5, 3, 9, 2, 7];
const numeroMaximo = Math.max(...numeros);

console.log(numeroMaximo);