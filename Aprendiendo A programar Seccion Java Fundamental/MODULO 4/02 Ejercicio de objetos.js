// Manipulacion de objetos en JavaScript 

var Persona = { nombre: 'Juan', edad: 20, estudios: { esProgramador : true, }}; 

// si queremos acceder a la propiedad nombre de la variable Persona, lo hacemos de la siguiente manera:
console.log(Persona.nombre); // Juan

// si queremos corregir el nombre de la persona, lo hacemos de la siguiente manera:
Persona.nombre = 'Pedro';
console.log(Persona.nombre); // Pedro
// si queremos corregir la edad de la persona, lo hacemos de la siguiente manera:
Persona.edad = 25;
console.log(Persona.edad); // 25

// Ahora como podemos crear propiedades nuevas en el objeto Persona?
// no se puede crear una propiedad vacia, por ejemplo:

var autos  = {}; // esto no es valido
autos.marca = ['Ford', 'Chevrolet', 'Fiat']; // esto si es valido
console.log(autos); // ['Ford', 'Chevrolet', 'Fiat']

// eliminar una propiedad de un objeto

delete autos.marca;
console.log(autos); // {}

// Dentro de la propiedad del objeto podemos guardar una funcion

var Funciones = {
    saludo : function() {
        console.log('Hola Mundo');
    },
};

Funciones.saludo(); // Hola Mundo
