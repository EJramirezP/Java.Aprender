
// Las funciones en javascript se definen con la palabra reservada function y se pueden invocar desde cualquier parte del código
// Las funciones pueden recibir parámetros y retornar valores o no retornar nada (undefined)        
// Las funciones pueden ser anónimas o tener nombre
// las funciones pueden ser invocadas con o sin paréntesis

// la funcion suma recibe un parametro x 
// y retorna la suma de x + 4
// los argumentos siempre van entre parentesis ()
// los intrunciones de la funcion siempre van entre llaves {}

// Esta es la primera forma de definir una funcion
function suma(x) { 
    console.log(x + 4);
}

// Invocación de la función suma

suma(5); // cualquier numero que se le pase a la funcion suma se le sumara 4

// la segunda forma de definir una funcion es la siguiente

// esta funcion no tiene nombre y se le asigna a una variable

var resta = function (x) {
    console.log(x - 4);
}

// Invocación de la función resta 

resta(5); // cualquier numero que se le pase a la funcion resta se le restara 4

// la tercera forma de definir una funcion es la siguiente

// se le conoce como funcion flecha o arrow function debido a este simbolo =>


var multiplicacion = (x) => {
    console.log(x * 4);
}

// Invocación de la función multiplicacion

multiplicacion(5); // cualquier numero que se le pase a la funcion multiplicacion se le multiplicara 4


// error comun al confundir console.log con return

// console.log solo imprime en consola el valor que se le pase

var animal = "perro";

console.log(animal); // imprime en consola perro

// ninguna aplicacion debe incluir console.log en el codigo final

// 

// return retorna el valor que se le pase

// Para explicar esto creamos un archivo llamado funcionees2.js en la misma carpeta que este archivo
// aqui dejamos una referencia de donde se encuentra el archivo ../CURSO PREP HENRY JAVA SCRIPT/funciones2.js/funciones2.js


// si quisieramos invocar la funcion nodejeselconsolelog desde este archivo funciones.js usariamos la palabra reservada require    


