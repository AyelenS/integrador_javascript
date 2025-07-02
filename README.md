
---

# 📚 Sistema de Gestión de Biblioteca 📚

Este es un programa sencillo creado para administrar una biblioteca directamente desde la terminal de tu computadora. Imagina que es el software de un bibliotecario, pero en lugar de clics y ventanas, usas comandos de texto.

El sistema te permite llevar un control de todos los libros y usuarios, gestionar préstamos y devoluciones, y hasta ver estadísticas interesantes sobre tu colección.

---

## ✨ Características Principales

Este programa puede hacer muchas cosas. Aquí tienes un resumen:

### 📖 **Gestión de Libros**
*   **Añadir libros:** Registra nuevos libros en la colección con su título, autor, año y género.
*   **Buscar libros:** Encuentra libros fácilmente por su título, autor o género.
*   **Ordenar la colección:** Organiza la lista de libros alfabéticamente por título o por año de publicación.
*   **Eliminar libros:** Da de baja libros que ya no forman parte de la biblioteca.

### 🧑 **Gestión de Usuarios**
*   **Registrar nuevos usuarios:** Crea perfiles para las personas que usan la biblioteca.
*   **Ver todos los usuarios:** Obtén una lista completa de todos los miembros registrados.
*   **Buscar un usuario:** Encuentra a un usuario específico usando su correo electrónico.
*   **Eliminar usuarios:** Da de baja a usuarios del sistema.

### 📈 **Reportes y Estadísticas**
*   **Reporte general:** Mira cuántos libros hay en total, cuántos están prestados y cuántos hay de cada género.
*   **Datos curiosos:** Descubre cuál es el libro más antiguo y el más nuevo de la colección.
*   **Análisis de años:** Calcula el promedio de año de publicación de todos los libros y descubre cuál es el año más común.

### 🔧 **Herramientas Adicionales**
*   **Préstamos y devoluciones:** Marca un libro como "prestado" a un usuario y luego como "devuelto".
*   **Limpieza de datos:** El sistema puede poner todos los títulos en mayúsculas y corregir los correos electrónicos a minúsculas para mantener todo ordenado.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto es muy accesible y está construido con herramientas fundamentales:

*   **JavaScript:** El lenguaje de programación que da vida a toda la lógica del sistema.
*   **Node.js:** El entorno que nos permite ejecutar JavaScript fuera de un navegador web, directamente en nuestra computadora.
*   **prompt-sync:** Una pequeña librería que ayuda al programa a hacerte preguntas y esperar tus respuestas en la terminal (como "¿Qué opción eliges?").

---

## 🚀 Cómo Empezar

Para usar este programa en tu computadora, solo sigue estos sencillos pasos.

### Requisitos Previos

Asegúrate de tener instalado **Node.js**. Si no lo tienes, puedes descargarlo desde [su página oficial](https://nodejs.org/).

### Instalación y Ejecución

1.  **Descarga el código:** Guarda el archivo de código (`.js`) en una carpeta en tu computadora. Vamos a suponer que lo llamas `biblioteca.js`.

2.  **Abre una terminal:**
    *   En Windows, busca "Terminal" o "PowerShell".
    *   En Mac o Linux, busca "Terminal".

3.  **Ve a la carpeta del proyecto:** Usa el comando `cd` para navegar hasta la carpeta donde guardaste el archivo. Por ejemplo:
    ```bash
    cd Documentos/MiProyectoDeBiblioteca
    ```

4.  **Instala las herramientas necesarias:** Este proyecto usa `prompt-sync`. Para instalarlo, escribe el siguiente comando en tu terminal y presiona Enter. Solo necesitas hacerlo una vez.
    ```bash
    npm install prompt-sync
    ```
    Este comando creará una carpeta llamada `node_modules` donde se guardará la herramienta.

5.  **¡Ejecuta el programa!** Ahora que todo está listo, inicia el sistema con este comando:
    ```bash
    node biblioteca.js
    ```

¡Y listo! Verás el menú principal en tu terminal y podrás empezar a interactuar con el sistema de la biblioteca.

---

## 🏗️ ¿Cómo está organizado el código?

El código está dividido en partes lógicas para que sea fácil de entender:

1.  **Estructuras de Datos (Punto 1):** Aquí es donde creamos las "cajas" para guardar la información. Tenemos una lista para los `libros` y otra para los `usuarios`.
2.  **Funciones de Libros y Usuarios (Puntos 2 y 3):** Son las herramientas para manejar los libros y usuarios (agregar, buscar, borrar, etc.).
3.  **Sistema de Préstamos (Punto 4):** La lógica para prestar y devolver libros, conectando a un usuario con un libro.
4.  **Reportes y Estadísticas (Puntos 5, 6 y 7):** Funciones que analizan los datos y te muestran resúmenes interesantes.
5.  **Manejo de Cadenas (Punto 8):** Herramientas para limpiar y estandarizar el texto, como poner todo en mayúsculas.
6.  **Menú Principal (Punto 9):** Es el "corazón" interactivo del programa. Te muestra las opciones disponibles y ejecuta la función correcta según lo que elijas.