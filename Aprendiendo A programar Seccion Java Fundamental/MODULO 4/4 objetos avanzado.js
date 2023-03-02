// Obejtoa avanzado 


// hasOwnProperty() es un método que nos permite saber si un objeto tiene una propiedad determinada.

// esta pregunta es un valor de tipo booleano true o false

var libro  = { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', paginas: 120, genero: 'infantil' };  // creamos un objeto con varias propiedades
var tienePropiedad = libro.hasOwnProperty('titulo'); // creamos una variable que almacena el resultado de la pregunta si el objeto libro tiene la propiedad titulo
console.log(tienePropiedad); // true
// en cambio 

var tienePropiedad = libro.hasOwnProperty('editorial'); // creamos una variable que almacena el resultado de la pregunta si el objeto libro tiene la propiedad editorial
console.log(tienePropiedad); // false

// metodo keys() nos permite obtener un array con las propiedades de un objeto 


var libro  = { titulo: 'Harry Potter', autor: 'J.K. Rowling', paginas: 120, genero: 'infantil' };  // creamos un objeto con varias propiedades

var propiedades = Object.keys(libro); // creamos una variable que almacena el resultado de la pregunta si el objeto libro tiene la propiedad titulo
console.log(propiedades); // [ 'titulo', 'autor', 'paginas', 'genero' ]


// recorrin un objeto con for in

var mundo = { paises: 195, continentes: 7, oceanos: 5 }; // creamos un objeto con varias propiedades

for (var propiedad in mundo) { // recorremos el objeto mundo
    console.log('Este objeto tiene la propiedad ' + propiedad); // Este objeto tiene la propiedad paises
    console.log('Este es el valor: ' + mundo[propiedad]);

}   


// objeto this tipo contexto        


var mascota = { // creamos un objeto mascota
    nombre: 'Firulais', // creamos una propiedad nombre
    edad: 5, // creamos una propiedad edad
    amistoso: true, // creamos una propiedad amistoso
    dueño: 'Juan', // creamos una propiedad dueño
    raza: 'Pitbull', // creamos una propiedad raza
        info: function() { // creamos una propiedad info que es una funcion
            console.log('El nombre de mi mascota es ' + this.nombre); // El nombre de mi mascota es Firulais
            console.log('Mi mascota tiene ' + this.edad + ' años'); // Mi mascota tiene 5 años
            console.log('Mi mascota es amistosa: ' + this.amistoso); // Mi mascota es amistosa: true
            console.log('Mi mascota es un ' + this.raza); // Mi mascota es un Pitbull
            console.log('Mi mascota es de ' + this.dueño); // Mi mascota es de Juan
        }
    }
mascota.info(); // llamamos a la funcion info   
