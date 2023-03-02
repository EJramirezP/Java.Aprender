// funciones de callback    
// 


/*
Los callbacks son muy útiles en el mundo de la programación, 
nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
sino que se ejecutará justo después de que la tarea se haya completado.

*/

var devuelvoUsario = function () {
    return "Josue";
};

var devuelvoSaludo = function () {
    return "Hola, soy ";
};

var saludar = function (cb1, cb2) {
    return cb1() + ' ' + cb2();
};

var resultado = saludar(devuelvoSaludo, devuelvoUsario);
console.log(resultado);

//

var devuelvoFrase = function (comida) {
    return "Me gusta la " + comida;
};

var hablar = function (cb, comida) {
    return cb(comida);
};  

var final = hablar(devuelvoFrase, "Pizza");
console.log(final);
