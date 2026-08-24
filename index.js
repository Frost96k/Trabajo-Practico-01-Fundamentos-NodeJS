const fs = require("node:fs"); // Importamos el módulo fs para manejar archivos.
const path = require("node:path"); // Importamos el módulo path para trabajar con archivos y rutas.

// Nombre del estudiante recibido por la terminal
const estudiante = process.argv[2] || "Estudiante";

// Datos del videojuego
const videojuego = {
    titulo: "Kenshi",
    estudio: "Lo-Fi Games",
    anio: 2018,
    plataformas: ["PC", "Xbox One"],
    multijugador: false
};

// Convertimos el arreglo de plataformas en un texto separado por comas
const plataformasComoTexto = videojuego.plataformas.join(", ");

// Convertimos el booleano en "Sí" o "No"
const jugabilidad = videojuego.multijugador ? "Multijugador" : "Un jugador";

// Creamos la ficha utilizando un template literal
const ficha = `FICHA DE VIDEOJUEGO
===================

Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasComoTexto}
¿Es multijugador?: ${jugabilidad}
`;

// Creamos la ruta de la carpeta salida
const salida = path.join(__dirname, "salida");

// Creamos la ruta completa del archivo
const rutaArchivo = path.join(salida, "ficha-videojuego.txt");

// Creamos la carpeta salida si no existe
fs.mkdirSync(salida, { recursive: true });

// Guardamos la ficha dentro del archivo
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// Mostramos la ficha en la terminal
console.log(ficha);

// Informamos dónde se creó el archivo
console.log(`Archivo generado en: ${rutaArchivo}`);