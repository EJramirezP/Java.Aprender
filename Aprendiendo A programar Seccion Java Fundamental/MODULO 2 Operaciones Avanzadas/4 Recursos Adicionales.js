/*
Expresión Switch
La expresión Switch evalúa una condición. 
Compara su valor con una instancia case, 
y ejecuta declaraciones asociadas a ese case, 
así como las declaraciones en los case que siguen.
*/

// Ejemplo de expresión Switch

var dia = 1;

switch (dia) {
    case 1:
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    case 3: 
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un dia de la semana');
}

/* La variable dia es igual a 1, por lo tanto se ejecuta el case 1 y se imprime Lunes
 Si la variable dia fuera igual a 2, se ejecutaría el case 2 y se imprimiría Martes
 asi sucesivamente hasta llegar al default
 default es el caso por defecto, es decir, si no se cumple ninguna de las condiciones anteriores, se ejecuta el default
ejemplo: si la variable fuera numero negatuvo, 0 o mayor a 7, se ejecutaría el default y se imprimiría 
No es un dia de la semana break es para que el programa no siga ejecutando los demas case, si no que se salga del switch */

// Operacion unica con multiples condiciones 

var carro = 'BMW';
switch (carro) {
    case 'BMW':
    case 'Audi':
    case 'Mercedes':
        console.log('Es un carro aleman');
        break;
    case 'Ferrari':
    case 'Lamborghini':
    case 'Porsche':
        console.log('Es un carro italiano');
        break;
    default:    
        console.log('No es un carro');  
}

//

// ================================================================================================================


/* Bucle Do-While
El bucle Do-While (hacer mientras) ejecuta una sentencia especificada,
 hasta que la condición de comprobación se evalúa como falsa. 
 La condición se evalúa después de ejecutar la sentencia, dando como resultado 
 que la sentencia especificada se ejecute al menos una vez. */

// Ejemplo de bucle Do-While

var i = 0;
do { // do es para indicar que se va a ejecutar el bucle al menos una vez
    i = i + 1; // como se ejecuta al menos una vez, se le suma 1 a i y el resultado es 1
    console.log(i); 
} while (i < 5);    // mientras i sea menor a 5 se va a repetir el bucle 

// ================================================================================================================

/* Declaración Continue
La declaración continue se utiliza dentro de los Bucles For. Nos permite omitir alguna 
de las iteraciones si se cumple una condición específica. */



var z = 0;

// Ejemplo de declaración continue

for (var z = 0; z < 10; z++) { // z es igual a 0, mientras z sea menor a 10, se va a repetir el bucle
    if (z == 5) { // si z es igual a 5, se va a ejecutar la siguiente condición
        continue; // si z es igual a 5, se va a omitir la iteración y se va a continuar con la siguiente
    }
    console.log(z); // se imprime el valor de z omitiendo el 5 y el bucle se repite hasta que z sea igual a 10
}

// ================================================================================================================

/* Declaración Break La declaración break se utiliza dentro de los Bucles For. Nos permite "romper"
 o finalizar el bucle con antelación si se cumple una condición específica. */

var x = 0;

// Ejemplo de declaración break

for (var x = 0; x < 10; x++) { // x es igual a 0, mientras x sea menor a 10, se va a repetir el bucle
    if (x == 5) { // si x es igual a 5, se va a ejecutar la siguiente condición
        break; // si x es igual a 5, se va a romper el bucle y se va a continuar con el siguiente codigo
    } 
    console.log(x); // se imprime el valor de x hasta que x sea igual a 5 y se rompe el bucle
}

// ================================================================================================================

