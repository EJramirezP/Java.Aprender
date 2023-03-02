/// Prototipos y herencias

/*

 Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 
*/

Array.prototype.mayoresquetres = function(){ // Array es el prototipo de los arreglos y con prototype le agregamos un metodo a todos los arreglos
    // queremos que todos los numeros mayores a tres nos devulvan false 
var arregloMod = [];

for (let i = 0; i < this.length; i++) {
    if (this[i] > 3) {
        arregloMod.push(false);
    } else {
        arregloMod.push(true);
    }
}

return arregloMod;
}


var arreglo = [1,2,3,4,5,6,7,8,9,10];
var nuevoArreglo = arreglo.mayoresquetres();

console.log(nuevoArreglo);

/// veamos otro ejemplo

class LatinoAmerica { // clase que hereda de Object 
    constructor () { // constructor de la clase vacio
        this.paises = []; // propiedad de la clase 

    }
}

LatinoAmerica.prototype.agregarPais = function(pais) {  // agregamos un metodo a la clase 
    this.paises.push(pais); // agregamos un pais al arreglo de paises
};

var continent = new LatinoAmerica(); // creamos un objeto de la clase LatinoAmerica
continent.agregarPais("Mexico"); // agregamos un pais al objeto 
console.log(continent.paises); // imprimimos el arreglo de paises del objeto