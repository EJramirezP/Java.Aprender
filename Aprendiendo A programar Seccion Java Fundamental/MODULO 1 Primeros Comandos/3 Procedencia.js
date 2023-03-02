// Operadores de Comparacion verdareo o falso

// Los operadores de comparacion son los siguientes: >, <, ==, !=, >=, <= 

// Mayor que >

console.log(5 > 3);

// Menor que <

console.log(5 < 3);

// igualdad ==

console.log(5 == 3);

// Diferente !=

console.log(5 != 3);

// Mayor o igual que >=

console.log(5 >= 3);

// Menor o igual que <=

console.log(5 <= 3);

// Operadores de comparacion de cadenas

// Mayor que >

console.log("a" > "b");

// Menor que <

console.log("a" < "b");

// igualdad ==

console.log("a" == "b");

// Diferente !=

console.log("a" != "b");

// Mayor o igual que >=

console.log("a" >= "b");

// Menor o igual que <=

console.log("a" <= "b");


// Operadores de ingualdad e igualdad estricta son los siguientes: =, ==, ===

// Igualdad estricta === verifica que el valor y el tipo de dato sean iguales

console.log(5 === 5); // true el valor y el tipo de dato son iguales
console.log(5 === "5"); // false el valor es igual pero el tipo de dato es diferente
console.log(5 === 6); // false el valor y el tipo de dato son diferentes

// Igualdad == verifica que el valor sea igual

console.log(5 == 5); // true el valor es igual
console.log(5 == "5"); // true el valor es igual aunque el tipo de dato es diferente
console.log(5 == 6); // false el valor es diferente

// Asociatividad de los operadores de comparacion 
// var a = 5;
// var b = 10;
// var c = a = b;

// se opera de derecha a izquierda por lo que primero se asigna el valor de b a a y luego se asigna el valor de a a c

var a = 5;
var b = 10;
var c = (a = b);

console.log(a); // 10
console.log(b); // 10
console.log(c); // 10

// ejemplo de asociatividad de los operadores de comparacion en la division

console.log(10 / 5 / 2); // 1

// se opera de derecha a izquierda por lo que primero se divide 10 / 5 y luego se divide el resultado entre 2



