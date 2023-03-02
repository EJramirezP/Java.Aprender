/* Los arreglos o arrays son lo que se conoce como objeto global dentro de Javascript, y que nos permiten guardar y gestionar información. Esto nos será de gran utilidad cuando queramos almacenar datos. 

Dentro de los arreglos existen dos conceptos que pueden parecer similares, pero son muy diferentes.

Por un lado tenemos lo que se conoce como elemento. Los elementos son aquellos datos que hayamos guardado. 

Por otro lado, está el concepto de índice. Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando. Un detalle muy importante que hay que destacar es que, en los arreglos, siempre se comienza a contabilizar las posiciones desde el número cero, no el uno.
*/
// Ejemplo de un array los arrays se guardan en una variable y se definen con corchetes y los elementos separados por comas 

var listadeCompras = []; // Array vacio

// los elementos se pueden agregar de la siguiente manera empezando por el indice 0 
// En este caso dejamos el indice 0 vacio y agregamos los elementos a partir del indice 3

listadeCompras[3] = "Leche";
listadeCompras[1] = "Huevos"; // Auque agregamos el indice 1 despues del indice 3 al llamar al arrat listadeCompras[]
// esta se mostrara en orden de indice 0, 1, 2, 3

// y llamamos al elemento con el indice 3 

// console.log(listadeCompras);

// se muestra en la terminal de la siguiente manera [ <1 empty item>, 'Huevos', <1 empty item>, 'Leche' ]

var elementoArray = listadeCompras[1]; // guardamos el elemento del indice 1 en la variable elementoArray

console.log(elementoArray); // mostramos el elemento del indice 1 en la terminal

// une de los metodos mas usados en el array es el metodo length que nos permite saber la cantidad de elementos que tiene el array

console.log(listadeCompras.length); // mostramos en la terminal la cantidad de elementos que tiene el array

// otro ejemplo de un array con length

var listaDeCompras2 = ["Leche", "Huevos", "Pan", "Cereal", "Arroz", "Frijoles", "Carne", "Pescado", "Frutas", "Verduras"];
console.log(listaDeCompras2.length); // mostramos en la terminal la cantidad de elementos que tiene el array



