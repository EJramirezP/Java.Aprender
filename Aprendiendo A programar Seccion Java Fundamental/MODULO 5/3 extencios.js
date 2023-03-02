

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }

 
 class Programdor extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad); // llamamos al constructor de la clase padre
        this.lenguaje = lenguaje;
 }
 codear() {
    console.log("Soy " + this.nombre + " y estoy codificando en " + this.lenguaje);
 }
    }

    var Josue = new Persona("Josue", 25); 
    var Programdores = new Programdor("Josue", 25, "Java");

      Josue.saludar();
      Programdores.codear();

      