// Los operadores logicos son los que nos permiten realizar operaciones logicas
// entre variables booleanas o entre expresiones booleanas
// Los operadores logicos son: &&, ||, ! que significan: AND, OR, NOT

// AND (&&) - Devuelve true si las dos expresiones son true y false si alguna de las dos es false 
// OR (||) - Devuelve true si alguna de las dos expresiones es true y false si las dos son false 
// NOT (!) - Devuelve true si la expresion es false y false si la expresion es true 

// Ejemplo: En una funcion de And (&&) 

function MayorMenor(num) {
  if (num > 5 && num < 10)
  console.log(true);
    else
    console.log(false);
}   


MayorMenor(7); // true
MayorMenor(3); // false


function MayorMenoruyPar(num) {
    if (num > 5 && num < 10 && num % 2 == 0)
    console.log(true);
      else
      console.log(false);
  }   
  
  MayorMenoruyPar(8); // true
    MayorMenoruyPar(7); // false

    // Ejemplo: En una funcion de OR (||)

    function longitud(str) {
        if (str === 'Josue' || str.length < 2 ) console.log(true);
        else console.log(false);
    }

    longitud('Josue'); // true Porque es igual a Josue
    longitud('J'); // true Porque la longitud es menor a 2 
    longitud('Josuee'); // false No es igual a Josue y la longitud es mayor a 2 


    // Ejemplo: En una funcion de NOT (!)

    function negacion(permiso) {
        if (!permiso) console.log('No tienes permiso');
        else console.log('Tienes permiso');
    }

    negacion(true); // Tienes permiso
    negacion(false); // No tienes permiso


    function negacion(permiso) {
        if (permiso !==true) console.log('No tienes permiso');
        else console.log('Tienes permiso');
    }

   negacion(true); // Tienes permiso
    negacion(false); // No tienes permiso


    function CondicionCompleja(num) {
        if (num > 5 && num < 10 && num % 2 == 0 || num === 20) console.log(true); // el numero tiene que ser mayor a 5 y menor a 10 y par o igual a 20
        else console.log(false);
    }

    CondicionCompleja(8); // true
    CondicionCompleja(7); // false
    CondicionCompleja(20); // true
    CondicionCompleja(21); // false
    CondicionCompleja(10); // false

