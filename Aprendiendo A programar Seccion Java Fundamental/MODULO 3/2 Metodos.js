// Ya vimos el metodo length que nos permite saber la cantidad de elementos que tiene el array, pero tambien podemos usar el metodo push() que nos permite agregar elementos al final del array

 var listaDeCompras3 = ["Leche", "Frutas", "Verduras"];
   // ==>  console.log(listaDeCompras3.length); // mostramos en la terminal la cantidad de elementos que tiene el array

    // veamos otros metodos de los arrays 

    // Tenemos los metodos de insercion que son los siguientes: [push(), pop(). unshift(), shift()]

    // push() agrega un elemento al final del array 

    listaDeCompras3.push("Cafe"); // agregamos el elemento "Cafe" al final del array    
    console.log(listaDeCompras3); // mostramos en la terminal el array con el nuevo elemento agregado

    // Aparece de la siguiente manera [ 'Leche', 'Huevos', 'Pan', 'Cereal', 'Arroz', 'Frijoles', 'Carne', 'Pescado', 'Frutas', 'Verduras', 'Cafe' ] 
    // con cafe agregado al final del array aunque este no este definido en el var listaDeCompras3 
        
// el metodo unshift() agrega un elemento al inicio del array 

    listaDeCompras3.unshift("cebolla"); // agregamos el elemento "cebolla" al inicio del array
    console.log(listaDeCompras3); // mostramos en la terminal el array con el nuevo elemento agregado

    // Aparece de la siguiente manera [ 'cebolla', 'Leche', 'Huevos', 'Pan', 'Cereal', 'Arroz', 'Frijoles', 'Carne', 'Pescado', 'Frutas', 'Verduras', 'Cafe' ]
    // con cebolla agregado al inicio del array aunque este no este definido en el var listaDeCompras3

// el metodo pop() elimina el ultimo elemento del array 

    listaDeCompras3.pop(); // eliminamos el ultimo elemento del array
    console.log(listaDeCompras3); // mostramos en la terminal el array con el ultimo elemento eliminado en este caso "Cafe" 


// el metodo shift() elimina el primer elemento del array 

    listaDeCompras3.shift(); // eliminamos el primer elemento del array
    console.log(listaDeCompras3); // mostramos en la terminal el array con el primer elemento eliminado en este caso "cebolla" 

// Tenemos los metodos de busqueda que son los siguientes: [indexOf(), lastIndexOf(), includes()] 


// veremos el metodo includes() que nos permite saber si un elemento esta incluido en el array 

// Creamos una variable que guarde el elemento que queremos buscar en el array \

// Lo que queremos decir con includes es que determina mediante verdadero o falso si el elemento que estamos buscando esta incluido en el array 
// por lo tanto devolvera true o false 

var cantante = ["Beyonce", "Rihanna", "Ariana Grande", "Selena Gomez", "Taylor Swift"]; 

// buscamos con includes() si el elemento "Beyonce" esta incluido en el array cantante

var busqueda = cantante.includes("Beyonce"); // guardamos el resultado de la busqueda en la variable busqueda
    console.log(busqueda); // mostramos en la terminal el resultado de la busqueda si es true o false
    // en este caso el resultado es true porque el elemento "Beyonce" esta incluido en el array cantante 
var busqueda = cantante.includes("Shakira"); // guardamos el resultado de la busqueda en la variable busqueda
    console.log(busqueda); // mostramos en la terminal el resultado de la busqueda si es true o false
    // en este caso el resultado es false porque el elemento "Shakira" no esta incluido en el array cantante

// el metodo every() pertenece a los metodos de tipo condicionales que nos permite saber si todos los elementos del array cumplen con una condicion

// Creamos un array con numeros

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // creamos un array con numeros

// Creamos una variable que guarde el resultado de la busqueda

var busqueda = numeros.every((num) => { // creamos una variable que guarde el resultado de la busqueda 
    return num < 11; // creamos una condicion que nos diga que todos los numeros del array numeros son menores a 11
} 
);

console.log(busqueda); // mostramos en la terminal el resultado de la busqueda si es true o false
// en este caso el resultado es true porque todos los numeros del array numeros son menores a 11

// creamos una segunfa variable que guarde el resultado de la busqueda en este caso de false    

var buscarfalse = numeros.every((num) => { // creamos una variable que guarde el resultado de la busqueda
        return num < 5; // creamos una condicion que nos diga que todos los numeros del array numeros son menores a 5
    }
);

console.log(buscarfalse); // mostramos en la terminal el resultado de la busqueda si es true o false
// en este caso el resultado es false porque no todos los numeros del array numeros son menores a 5

// Por otro lado tenemos los metodos splite y join que nos permite convertir un string en un array y viceversa pertenecen a los metodos de conversion 

// metodo splite() que nos permite convertir un string en un array split("separador") 

// Creamos una variable que guarde un string en este caso un apellido

var apellido = "Gonzales"; // Sabemos que Gonzales se termina en z y en esta varable termina en s

// podemos hacer uso del metodo splite() para convertir el string en un array y separar cada letra del string en un elemento del array 

var apellidoArray = apellido.split(""); // creamos una variable que guarde el resultado de la busqueda 
// las comillas vacias "" nos permiten separar cada letra del string en un elemento del array es importante que las comillas esten vacias
console.log(apellidoArray); // mostramos en la terminal el array con cada letra del string en un elemento del array
// en este caso el resultado es [ 'G', 'o', 'n', 'z', 'a', 'l', 'e', 's' ] 

// Luego usamos pop para eliminar el ultimo elemento del array que en este caso es s 

apellidoArray.pop(); // eliminamos el ultimo elemento del array que en este caso es s

console.log(apellidoArray); // mostramos en la terminal el array con el ultimo elemento eliminado que en este caso es s

// Luego usamos push para agregar el elemento z al final del array

apellidoArray.push("z"); // agregamos el elemento z al final del array

console.log(apellidoArray); // mostramos en la terminal el array con el elemento z agregado al final del array

// Luego usamos join para convertir el array en un string

var apellidoString = apellidoArray.join(""); // creamos una variable que guarde el resultado de la busqueda 
// las comillas vacias "" nos permiten separar cada letra del string en un elemento del array es importante que las comillas esten vacias

console.log(apellidoString); // mostramos en la terminal el string con todas las letras del array unidas

// Metodo forEach() que nos permite recorrer un array 

// Creamos un array con numeros     

var numeros = [1, 2, 3, 4]; // creamos un array con numeros  

// Creamos una variable que guarde el resultado de la busqueda

numeros.forEach((num)  =>  console.log(num)); // creamos una variable que guarde el resultado de la busqueda
// ahora mostraremos solo el numero 2 del array numeros

numeros.forEach(num => {  // creamos una variable que guarde el resultado de la busqueda
    if (num == 2) // creamos una condicion que nos diga que si el numero es igual a 2
(console.log(num)) 
}
); 

// Metodo map() que nos permite recorrer un array y crear un nuevo array con los resultados de la busqueda 

// Creamos un array con numeros 

var numeros = [1, 2, 3, 4]; // creamos un array con numeros

// usaremos el methodo map() para sumar 1 a cada numero del array numeros

var numeros2 = numeros.map((num) => { // creamos una variable que guarde el resultado de la busqueda
    return num + 1; // creamos una condicion que nos diga que sume 1 a cada numero del array numeros
}
);
    console .log(numeros2); // mostramos en la terminal el array con los numeros del array numeros sumados en 1


    // Los metodos que no hemos visto son los siguientes: [find(), findIndex(), filter(), reduce(), sort()] ,  [fill(), copyWithin(), reverse(), sort()]
    // tampoco hemos visto los metodos de conversion [toString(), valueOf(), toLocaleString()] y los metodos de iteracion [entries(), keys(), values()]
    
    


    

