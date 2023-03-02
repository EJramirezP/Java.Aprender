// Bucles for y while son bucles que se repiten hasta que se cumple una condicion

// Bucle for  -  Bucle que se repite hasta que se cumple una condicion la diferencia es que se puede definir una variable y un contador

// Bucle while  -  Bucle que se repite hasta que se cumple una condicion la diferencia es que no se puede definir una variable y un contador

// Bucle for Ejemplo 


// Imaginemos que tenemos la variable suma y queremos sumarle 1, 2, 3 y asi sucesivamente hasta llegar a 100

// Seria muy tedioso hacerlo asi:

var suma = 0;

//suma = suma + 1;
// suma = suma + 2;
// suma = suma + 3;
// suma = suma + 4;

// console.log(suma); 

// asi hasta llegar a 100 

// Pero podemos hacerlo con un bucle for 

// La sintaxis es la siguiente: 


for (var i=0 ; i<10; i++) {  
suma = suma + 1;
console.log(suma);
}


var suma2 = 0; // Declaramos la variable suma2 y le asignamos el valor 0

for (let i = 0; i < 5; i++) { // Declaramos la variable i y le asignamos el valor 0, luego le decimos que mientras i sea menor a 5 se va a repetir el bucle y por ultimo le decimos que cada vez que se repita el bucle se le sume 1 a i
    suma2 = suma2 + i;
    console.log('Variable de iteración: ', i); // La variable de iteración es i y la imprimimos en consola
 }
 console.log('Variable suma: ', suma2);


 var suma3 = 0; // Declaramos la variable suma3 y le asignamos el valor 0

 // Bucle while Ejemplo

 while (suma3 < 5) {
    suma3 = suma3 + 1;
    console.log(suma3);
 }


 // La variable for se usa cuando sabemos cuantos pasos vamos a dar para resolver un problema
 // La variable while se usa cuando no sabemos cuantos pasos vamos a dar para resolver un problema

 