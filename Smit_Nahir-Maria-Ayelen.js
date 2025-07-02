 /* 📚 Sistema de Gestión de Biblioteca 📚 */

/* Este sistema permite gestionar libros y usuarios de una biblioteca, incluyendo funcionalidades para agregar, buscar, ordenar y eliminar libros, así como registrar
 y buscar usuarios. También incluye reportes estadísticos y normalización de datos. */


const prompt = require('prompt-sync')({ sigint: true });  /* Importar la librería prompt-sync para manejar entradas por consola */


/* ✅PUNTO 1: Estructura de Datos */ 

/*A)- Crear un array de objetos llamado "libros" que contenga al menos 10 libros con las siguientes propiedades: 
     id (número), titulo (string), autor (string), año (número), genero (string) y disponible (booleano). */

const libros = [  /*Se declara una palabra clave "const" llamada 'libros' que contiene una lista de objetos. */
    { id: 1, titulo: "Colmillo Blanco", autor: "Jack London", año: 1906, genero: "Aventura", disponible: true },
    { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, genero: "Aventura", disponible: true },
    { id: 3, titulo: "Las Aventuras de Alicia en el pais de las maravillas", autor:"Lewis Carroll", año: 1865, genero: "Ficcion", disponible: true },
    { id: 4, titulo: "Martin Fierro", autor: "José Hernández", año: 1872, genero: "Gauchesco", disponible: true },
    { id: 5, titulo: "Platero y Yo", autor: "Juan Ramon Jimenez", año: 1914, genero: "Narrativo", disponible: true },
    { id: 6, titulo: "El Alquimista", autor: "Paulo Coelho", año: 1988, genero: "Ficcion", disponible: true },
    { id: 7, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, genero: "Ficcion", disponible: true },
    { id: 8, titulo: "La llamada de Cthulhu", autor: "H.P.Lovecraft", año: 1928, genero: "Terror, Historieta", disponible: true },
    { id: 9, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes Saavedra", año: 1605, genero: "Novela psicológica", disponible: true },
    { id: 10, titulo: "El diario de Anna Frank", autor: "Ana Frank", año: 1947, genero: " Biografia, Autobiografia", disponible: true }
    /*Cada objeto representa un libro con sus propiedades: (id único, titulo, autor, año de publicacion, género y disponibilidad) */
];

/* B) - Crear un array de objetos llamado "usuarios" que contenga al menos 5 usuarios con las siguientes propiedades:
     id (número), nombre (string), email (string) y librosPrestados (array de objetos). */

const usuarios = [
    { id: 1, nombre: "Monica Godoy", email: "moni22@example.com", librosPrestados: [] },
    { id: 2, nombre: "Lucia Fernandez", email: "luci_fe@example.com", librosPrestados: [] },
    { id: 3, nombre: "Jose Luna", email: "jose_66_1@example.com", librosPrestados: [] },
    { id: 4, nombre: "Martin Lucero", email: "tincho-7@example.com", librosPrestados: [] },
    { id: 5, nombre: "Pablo Garcia", email: "garcia_p@example.com", librosPrestados: [] }
];

/* ---- Cada libro debe tener un ID único y cada usuario debe tener un ID único ---- /*

 
/* ✅PUNTO 2: Funciones de Gestión de Libros */

/* A) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que
agregue un nuevo libro al array libros. */

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, año: anio, genero, disponible: true };
    libros.push(nuevoLibro);
    console.log(`Libro agregado: ${titulo}`);
}


/* B) Implementar una función buscarLibro(criterio, valor) que busque libros por título, autor o género utilizando el algoritmo de busqueda lineal. */

function buscarLibro(criterio, valor) {
    const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
    if (resultado.length > 0) {
        console.log("Libros encontrados:");
        resultado.forEach(libro => console.log(`${libro.titulo} de ${libro.autor}, Año: ${libro.año}, Género: ${libro.genero}`));
    } else {
        console.log("No se encontraron libros con ese criterio.");
    }
}


/* C) Implementar una función ordenarLibros(criterio) que ordene los libros por título o año de publicación, utilizando algoritmo bubblesort y mostrar los libros por consola. */

function ordenarLibros(criterio) { /*👉 Esta función recibe un criterio de ordenación (título o año) y ordena el array 'libros' según ese criterio. */
    if (criterio === "titulo") {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo)); /*👉 Ordena el array 'libros' alfabéticamente por el título usando 'localeCompare' que compara cadenas respetando reglas de idioma (acentos, mayúsculas, etc.)*/
    } else if (criterio === "año") {
        libros.sort((a, b) => a.año - b.año); /*👉 Ordena el array 'libros' numéricamente por el año de publicación, restando los años de dos libros para determinar su orden */
    } else {
        console.log("Criterio no válido. Use 'titulo' o 'año'.");
        return;
    }
    console.log("Libros ordenados:");
    libros.forEach(libro => console.log(`${libro.titulo} de ${libro.autor}, Año: ${libro.año}, Género: ${libro.genero}`));
}


/* D) Implementar una función borrarLibro(id) que elimine un libro que se le pase por parámetro. */

function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        const libroBorrado = libros.splice(index, 1); /*👉 Se usa 'splice' para eliminar el libro del array 'libros' en la posición 'index' y devuelve un array con el libro eliminado */
        console.log(`Libro borrado: ${libroBorrado[0].titulo}`);
    } else {
        console.log("No se encontró un libro con ese ID.");
    }
}
console.log("Gestión de Libros:"); 
agregarLibro(11, "El Hobbit", "J.R.R. Tolkien", 1937, "Ficción de fantasía");
buscarLibro("titulo", "El Hobbit");
ordenarLibros("titulo");
borrarLibro(11);


/* ✅PUNTO 3: Gestión de Usuarios */

/* A) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. */

function registrarUsuario(nombre, email) { 
    const nuevoUsuario = { id: usuarios.length + 1, nombre, email, librosPrestados: [] };
    usuarios.push(nuevoUsuario);
    console.log(`Usuario registrado: ${nombre}`);
}


/* B) Implementar una función mostrarTodosLosUsuarios() que muestre todos los usuarios registrados. */

function mostrarTodosLosUsuarios() {
    console.log("Lista de usuarios:");
    usuarios.forEach(usuario => console.log(`${usuario.nombre} (${usuario.email})`));
}


/* C) Implementar una función buscarUsuario(email) que busque un usuario por su email. */

function buscarUsuario(email) {
    const usuario = usuarios.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (usuario) {
        console.log(`Usuario encontrado: ${usuario.nombre}, Email: ${usuario.email}`);
    } else {
        console.log("No se encontró un usuario con ese email.");
    }
}   


/* D) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado. */

function borrarUsuario(nombre, email) {
    const index = usuarios.findIndex(user => user.nombre.toLowerCase() === nombre.toLowerCase() && user.email.toLowerCase() === email.toLowerCase());
    if (index !== -1) {
        const usuarioBorrado = usuarios.splice(index, 1);
        console.log(`Usuario borrado: ${usuarioBorrado[0].nombre}`);
    } else {
        console.log("No se encontró un usuario con ese nombre y email.");
    }
}
console.log("\nGestión de Usuarios:");
registrarUsuario("Ana Pérez", "ana1993@example.com");
mostrarTodosLosUsuarios();  
buscarUsuario("Ana Pérez");
borrarUsuario("Ana Pérez", "ana1993@example.com");


/* ✅PUNTO 4: Sistema de Préstamos */

/* A) Desarrollar una función prestarLibro(idLibro, idUsuario), dicha funcion debe marcar un libro como no disponible y agregarlo a la lista de de libros prestados. */ 

function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(user => user.id === idUsuario);
    if (libro && usuario) {
        if (libro.disponible) {
            libro.disponible = false;
            usuario.librosPrestados.push(libro); /*👉 Agrega el libro a la lista de libros prestados del usuario */
            console.log(`Libro prestado: ${libro.titulo} a ${usuario.nombre}`);
        } else {
            console.log(`El libro ${libro.titulo} no está disponible.`);
        }
    } else {        
        console.log("Libro o usuario no encontrado.");

    }
}


/* B) Desarrollar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario. */

function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(user => user.id === idUsuario);
    if (libro && usuario) {
        const index = usuario.librosPrestados.findIndex(libroPrestado => libroPrestado.id === idLibro);
        if (index !== -1) {
            libro.disponible = true;
            usuario.librosPrestados.splice(index, 1);
            console.log(`Libro devuelto: ${libro.titulo} por ${usuario.nombre}`);
        } else {
            console.log(`El libro ${libro.titulo} no está prestado a ${usuario.nombre}.`);
        }
    } else {
        console.log("Libro o usuario no encontrado.");
    }
}
console.log("\nSistema de Préstamos:");
prestarLibro(1, 1);  /* Prestar "Colmillo Blanco" a "Monica Godoy" */
prestarLibro(2, 2);  /* Prestar "El Principito" a "Lucia Fernandez" */
devolverLibro(1, 1); /* Devolver "Colmillo Blanco" por "Monica Godoy" */


/* ✅PUNTO 5: Sistema de Prestamos*/

/* A) Implementar una función generarReporteLibros() que muestre un reporte con la cantidad total de libros, la cantidad de libros prestados, 
la cantidad de libros por género, el libro más antiguo y el libro más nuevo. */

function generarReporteLibros() {
    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => !libro.disponible).length; /*👉 Este metodo filtra los libros que no están disponibles (prestados) y cuenta cuántos hay. */
     const cantidadPorGenero = libros.reduce((acc, libro) => {  /*👉 Se usa 'reduce' para contar la cantidad de libros por género, creando un objeto donde las claves son los géneros y los valores son las cantidades. */
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});

    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.año < antiguo.año ? libro : antiguo), libros[0]);
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo), libros[0]);

    const textoPorGenero = Object.entries(cantidadPorGenero) /*👉 Transforma un objeto en un array de pares clave-valor, donde cada par es un array con el género y la cantidad de libros. */ 
        .map(([genero, cantidad]) => `${genero}: ${cantidad}`)
        .join(", ");

    console.log("Reporte de Libros:");
    console.log(`Cantidad total de libros: ${totalLibros}`);
    console.log(`Cantidad de libros prestados: ${librosPrestados}`);
    console.log(`Cantidad de libros por genero: ${textoPorGenero}`);
    console.log(`Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.año})`);
    console.log(`Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.año})`);
}

console.log("\nGeneración de Reporte de Libros:");
generarReporteLibros();

/* ✅PUNTO 6: Identificación Avanzada de libros*/

/* A) Implementar una función librosConPalabrasEnTitulo() que muestre los títulos de los libros que tienen 
más de una palabra en el título, y que no contengan números ni caracteres especiales. */

function librosConPalabrasEnTitulo() 
{
    const librosConPalabras = libros.filter(libro => { /*👉 Filtra los libros que tienen más de una palabra en el título, no contienen números ni caracteres especiales */
        const palabras = libro.titulo.split(" ");
        return palabras.length > 1 && !/\d/.test(libro.titulo) && /^[a-zA-Z\s]+$/.test(libro.titulo); /* Verifica que el título no contenga números ni caracteres especiales */ 
    }).map(libro => libro.titulo); /*👉 Extrae solo los títulos válidos */

    if (librosConPalabras.length > 0) {
        console.log(`Libros con más de una palabra en el título:`);
        console.log(librosConPalabras.join(", "));
    } else {
        console.log("No se encontraron libros con más de una palabra en el título.");
    }
}

 console.log("\nIdentificación de Libros:");
librosConPalabrasEnTitulo();    


/* ✅PUNTO 7: Cálculos Estadísticos */

/* A) Implementar una función calcularEstadisticas() que calcule el promedio de años de publicación de cada libro, año de publicacion 
mas frecuente, y la diferencia en años entre el libro mas antiguo y el mas nuevo  */

function calcularEstadisticas() {
    const totalAños = libros.reduce((sum, libro) => sum + libro.año, 0);
    const promedioAños = totalAños / libros.length;

    const añosFrecuentes = {};
    libros.forEach(libro => {
        añosFrecuentes[libro.año] = (añosFrecuentes[libro.año] || 0) + 1;
    });
    const añoMasFrecuente = Object.keys(añosFrecuentes).reduce((año, actual) => añosFrecuentes[actual] > añosFrecuentes[año] ? actual : año); /*👉 Extrae todas las claves (en este caso, los años) del objeto `añosFrecuentes` y las devuelve como un array.*/

    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.año < antiguo.año ? libro : antiguo), libros[0]);
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo), libros[0]);
    const diferenciaAños = libroMasNuevo.año - libroMasAntiguo.año;

    console.log("Estadísticas de Libros:");
    console.log(`Promedio de años de publicación: ${promedioAños.toFixed(2)}`);
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo (${libroMasAntiguo.titulo}) y el más nuevo (${libroMasNuevo.titulo}): ${diferenciaAños} años`);
}
 console.log("\nCálculos Estadísticos:");
calcularEstadisticas();


/* ✅PUNTO 8: Manejo de Cadenas */

/* A) Implementar una función normalizarDatos() que convierta todos los títulos de los libros a mayúsculas, elimine espacios 
al inicio y final de los nombres de autores, formatee los emails de los usuarios a minúscula y muestre los títulos por consola  */

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
    });
    console.log("Títulos:");
    libros.forEach(libro => console.log(libro.titulo));
}
console.log("\nNormalización de Datos:");
normalizarDatos();

function eliminarEspaciosAutores() {
    libros.forEach(libro => {
        libro.autor = libro.autor.trim();
    });
    libros.forEach(libro => console.log(`${libro.titulo} - Autor: ${libro.autor}`));
}
console.log("\nAutores:");
eliminarEspaciosAutores();

function formatearEmailsUsuarios() {
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
    usuarios.forEach(usuario => console.log(`${usuario.nombre} - Email: ${usuario.email}`));
}
console.log("\nUsuarios:");
formatearEmailsUsuarios();


/* ✅PUNTO 9: Interfaz de Usuario por Consola */

/* A) Implementar un menú interactivo que permita al usuario seleccionar diferentes opciones para gestionar libros y usuarios. */

function menuPrincipal() { /*👉 El menú debe permitir agregar, buscar, ordenar y eliminar libros, registrar y buscar usuarios, así como generar reportes y realizar cálculos estadísticos.*/
    let opcion;
    do {
        console.log("\n--- Menú Principal ---");
        console.log("1. Agregar Libro");
        console.log("2. Buscar Libro");
        console.log("3. Ordenar Libros");
        console.log("4. Borrar Libro");
        console.log("5. Registrar Usuario");
        console.log("6. Mostrar Todos los Usuarios");
        console.log("7. Buscar Usuario");
        console.log("8. Borrar Usuario");
        console.log("9. Generar Reporte de Libros");
        console.log("10. Identificar Libros con Mas Palabras en el Título");
        console.log("11. Calcular Las Estadísticas de los Libros");
        console.log("12. Normalizar Datos de los Libros");
        console.log("13. Eliminar Espacios de Autores");
        console.log("14. Formatear Emails de Usuarios");
        console.log("0. Salir");

        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                const id = parseInt(prompt("Ingrese ID del libro: "));
                const titulo = prompt("Ingrese título del libro: ");
                const autor = prompt("Ingrese autor del libro: ");
                const anio = parseInt(prompt("Ingrese año de publicación: "));
                const genero = prompt("Ingrese género del libro: ");
                agregarLibro(id, titulo, autor, anio, genero);
                break;
            case '2':
                const criterio = prompt("Ingrese criterio de búsqueda (titulo/autor): ");
                const valor = prompt(`Ingrese valor a buscar por ${criterio}: `);
                buscarLibro(criterio, valor);
                break;
            case '3':
                const ordenarCriterio = prompt("Ingrese criterio para ordenar (titulo/año): ");
                ordenarLibros(ordenarCriterio);
                break;
            case '4':
                const borrarId = parseInt(prompt("Ingrese ID del libro a borrar: "));
                borrarLibro(borrarId);
                break;
            case '5':
                const nombreUsuario = prompt("Ingrese nombre del usuario: ");
                const emailUsuario = prompt("Ingrese email del usuario: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
            case '6':
                mostrarTodosLosUsuarios();
                break;
            case '7':
                const emailBuscar = prompt("Ingrese email del usuario a buscar: ");
                buscarUsuario(emailBuscar);
                break;  
            case '8':
                const nombreBorrar = prompt("Ingrese nombre del usuario a borrar: ");
                const emailBorrar = prompt("Ingrese email del usuario a borrar: ");
                borrarUsuario(nombreBorrar, emailBorrar);   
                break;
            case '9':   
                generarReporteLibros();
                break;  
            case '10':
                librosConPalabrasEnTitulo();
                break;
            case '11':
                calcularEstadisticas();
                break;
            case '12':
                normalizarDatos();
                break;
            case '13':
                eliminarEspaciosAutores();
                break;
            case '14':
                formatearEmailsUsuarios();
                break;
            case '0':
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.");
        }
    } while (opcion !== '0');
}
console.log("\nBienvenido al Sistema de Gestión de Biblioteca");
menuPrincipal();    




