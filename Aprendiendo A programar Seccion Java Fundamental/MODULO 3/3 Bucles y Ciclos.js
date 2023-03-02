// Bucle for y while en conjunto con los metodos vistos en el inciso 2 de este modulo

// Ejemplo de un bucle for

// la sintaxis de un bucle for es la siguiente

var arr = [1, 2, 3, 4, 5]; // creamos un array con numeros

for (var i = 0; i < arr.length; i++) {
  // creamos un bucle for que recorra el array arr
  console.log(arr[i]); // mostramos en la terminal cada elemento del array arr
}

// Miremos otro ejemplo donde encontraremos una letra en un string

function estalaletra(string) {
  // creamos una funcion que reciba un string
  var letra = string.split(""); // creamos una variable que guarde el resultado de la busqueda

  for (let i = 0; i < letra.length; i++) {
    // creamos un bucle for que recorra el array letra hasta que i sea menor a la longitud del array letra
    if (letra[i] === "p") {
      // creamos una condicion que nos diga que si el elemento del array letra es igual a la letra p
      console.log("Si contiene la letra p"); // mostramos en la terminal el resultado de la busqueda si es true o false
    }
  }
}

estalaletra("hola"); // mostramos en la terminal el resultado de la busqueda si es true o false
estalaletra("hola p"); // mostramos en la terminal el resultado de la busqueda si es true o false


// Ejemplo de un bucle while que es un bucle que se ejecuta mientras una condicion sea verdadera

var arr = []; // creamos un array vacio

while (arr.length < 5) {
  // creamos un bucle while que recorra el array arro hasta que la longitud del array arro sea menor a 5
  arr.push('BOOM'); // agregamos un elemento al array arr
}

console.log(arr); // mostramos en la terminal el array arro

// Solo mostrara la palabram boom 5 veces porque la condicion del bucle while es que la longitud del array arr sea menor a 5

// un error comum es el bucle infinito que es un bucle que se ejecuta infinitamente

// var arr = []; // creamos un array vacio

// var num = 1; // creamos una variable que guarde el numero 1

// while (num < 1) {
    // arr.push(Math.random()); // agregamos un elemento al array arr
// }

// console.log(arr); // mostramos en la terminal el array arr 

// No ejecutar este codigo porque se ejecutara infinitamente 


