// Dot-Notation y Bracket-Notacion


// Dot-Notation es la forma mas comun de acceder a las propiedades de un objeto
// nos permite acceder a las propiedades de un objeto de una manera mas sencilla

// dot notation es acceder o asignar un valor a una propiedad de un objeto

var atuendos = { manos: ['guantes', 'guantes de cuero'], pies: ['botas', 'botas de cuero'] };

console.log(atuendos.manos); // ['guantes', 'guantes de cuero'] 

// como ven este es un ejemplo de dot notation se le llama asi porque usamos un punto para acceder a la propiedad del objeto

// Bracket-Notation es otra forma de acceder a las propiedades de un objeto notacion por corchetes

atuendos ['piernas'] = ['pantalones', 'pantalones de cuero'];
    console.log(atuendos); // { manos: ['guantes', 'guantes de cuero'], pies: ['botas', 'botas de cuero'], piernas: ['pantalones', 'pantalones de cuero'] }

    // otro ejemplo 

    var comidas = {}; // creamos un array vacio
     var diferenciasdenotacion = function (notUno, notDos) { // creamos una funcion que recibe dos parametros 
        // comidas.notUno = ['pizza', 'hamburguesa']; // asignamos un array a la propiedad notUno del objeto comidas con el metodo dot notation
        comidas[notUno] = ['pizza', 'hamburguesa'];
        //  comidas['notDos'] = ['manzanas', 'peras']; // asignamos un array a la propiedad notDos del objeto comidas con el metodo bracket notation
       comidas[notDos] = ['manzanas', 'peras'];
     };
     diferenciasdenotacion('comida rapida', 'comida saludable'); // llamamos a la funcion y le pasamos dos parametros
console.log(comidas); // { comida rapida: ['pizza', 'hamburguesa'], 'comida saludable': ['pizza', 'hamburguesa'] }

