// Aqui escribimos el codigo para una function con return

    function nodejeselconsolelog(nombre) {
        console.log(nombre);
       return nombre;
    }

    // Para invocar otro archivos .js desde otro archivo .js se usa la palabra reservada require 
// esa palabra la usamos para importar este archivo en el archivo Funciones.js

// en este caso no la usaremos porque este archivo es el que se ejecutara en node


// abrimos una nueva terminal y ejecutamos el archivo funciones2.js
// para ejecutarlo escribimos node funciones2.js 

// si quieres conocer mas comandos de node usa .help en la terminal de node


// Para la primera practica copia este codigo y ejecutalo en la terminal de node directamente

// en llamamos a la funcion nodejeselconsolelog y le pasamos el argumento "josue" o tu nombre

// la funcion nodejeselconsolelog imprime en consola el nombre que le pasamos y retorna el nombre que le pasamos

// nodejeselconsolelog("josue"); // imprime en consola josue y retorna josue

// Si llegasemos a quitar el return de la funcion nodejeselconsolelog y ejecutamos el codigo de nuevo

// nodejeselconsolelog("josue"); // imprime en consola josue y retorna undefined 

// undefined no nos sirve para nada, por eso es importante usar return

// Agregamos una segunda funcion y llamanos la primera funcion y le asignamos un valor 

function otrafuncion() {
    return (
        "el nombre retornado por la funcion 'nodejeselconsolelog' es: " +  nodejeselconsolelog('josue') );
}
