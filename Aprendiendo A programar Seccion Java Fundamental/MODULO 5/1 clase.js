// Las clases son un modelo a seguir para crear objetos. Siempre inician con Mayúscula.

/*
function  Auto(puertas, color, marca, modelo) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca
    this.modelo = modelo;
    this.informacion = function () {
    console.log('El auto es de marca ' + this.marca + ' y modelo ' + this.modelo);
}
}
var miPrimerAuto = new Auto(4, "Rojo", "Fiat", "ABC123"); // Instanciación de un objeto  new es una palabra reservada de JS que nos permite crear un objeto a partir de una clase.

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.color);
miPrimerAuto.informacion();

// Queremos que nos de informacion de la instaancia de un objeto

*/
// ahora usararemos clases

class Auto { // siempre inician con mayuscula
    constructor(puertas, color, marca, modelo) { // constructor es una palabra reservada de JS
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    informacion() {
        console.log('El auto es de marca ' + this.marca + ' y modelo ' + this.modelo);
    }
}

var segundoAuto = new Auto(2, "Azul", "Ford", "ABC123");
console.log(segundoAuto);
console.log(segundoAuto.color);

segundoAuto.informacion()


// nuevo ejemplo

class Football {
        constructor(jugador){  
            this.jugador = jugador;
        }

            obtenerJugador(){
                console.log(this.jugador);     
}
}


var argentina = new Football("Messi"); // instanciacion de un objeto 
var brasil = new Football("Neymar");

argentina.obtenerJugador(); // llamamos al metodo obtenerJugador de la clase Football 
brasil.obtenerJugador();