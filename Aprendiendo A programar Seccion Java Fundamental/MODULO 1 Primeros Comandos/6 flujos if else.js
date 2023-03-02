// Los flujos son la estructura de control que nos permite ejecutar un bloque de código
// dependiendo de una condición.


// if (condición) { // Si la condición es verdadera, se ejecuta el bloque de código 
//  dentro del if

// else { // Si la condición es falsa, se ejecuta el bloque de código 
//  dentro del else 

// en pocas palabras el if es la condicion y el else es el resultado de la condicion 

// Ejemplo:

function viaje (destino){ // Declarar la variable viaje y la funcion destino 
    if (destino === 'playa') { // Si la variable destino es igual a la palabra playa 
        console.log('giras a la izquierda'); // imprime en consola giras a la izquierda
       // return "vas a la playa";
    } 
    else if (destino === 'montaña') { // Por el contrario si la variable destino es igual a la palabra montaña
        console.log('giras a la derecha'); // imprime en consola giras a la derecha
        //return "vas a la montaña";
    }
}

viaje('montaña'); // Llamamos a la funcion viaje y le pasamos la palabra montaña o playa    
                    
function Manejo(edad) { // Declarar la variable Manejo y la funcion edad
    if(edad >= 18) { // Si la variable edad es mayor o igual a 18
             console.log('Puede manejar'); // imprime en consola puede manejar
    }  // en este caso no se pone el else porque no hay otra condicion 
    // ya que si no es mayor o igual a 18 no puede manejar
    console.log('No puede manejar'); // de lo contrario imprime en consola no puede manejar
  }
  
  Manejo(17)

