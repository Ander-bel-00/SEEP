// Importar el modelo de la tabla evaluacion.
const Evaluacion = require("../models/EvaluacionEP");
// Importar el modelo de Aprendices.
const Aprendices = require("../models/Aprendices");
// Importa el módulo 'shortid' para generar identificadores cortos únicos.
const shortid = require("shortid");

// Importa el módulo 'multer' para manejar la subida de archivos.
const multer = require("multer");

// Importa el módulo 'fs' para trabajar con el sistema de archivos (file system).
const fs = require("fs");

// Importa el módulo 'path' para trabajar con rutas de archivo y directorio.
const path = require("path");

// Configura el almacenamiento para los archivos subidos, especificando la carpeta de destino y el nombre de archivo.
const storage = multer.diskStorage({
  // Esta función define la carpeta de destino donde se guardarán los archivos subidos.
  destination: function (req, file, cb) {
    // Llama a la función de devolución de llamada (callback) 'cb' para indicar la carpeta de destino donde se guardarán los archivos subidos.
    // 'null' indica que no hay errores.
    // 'path.join(__dirname, '../uploads/')' concatena el directorio actual (__dirname) con la carpeta 'uploads' para obtener la ruta completa de destino.
    cb(null, path.join(__dirname, "../Firmas/"));
  },
  // Esta función define el nombre del archivo que se guardará en el servidor.
  filename: function (req, file, cb) {
    // Genera un nombre único para el archivo utilizando shortid y el nombre original del archivo.
    const uniqueFilename = shortid.generate() + "-" + file.originalname;
    // Llama a la función de callback (cb) con el nombre único del archivo.
    cb(null, uniqueFilename);
  },
});

// Configuración de multer para el manejo de la carga de archivos
const upload = multer({
  // Define el almacenamiento para los archivos
  storage: storage,
  // Define un filtro de archivo para limitar los tipos de archivos permitidos
  fileFilter: function (req, file, cb) {
    // Lista de extensiones de archivo permitidas
    const allowedFileTypes = [".jpg", ".png"];
    // Obtiene la extensión del archivo cargado y la convierte a minúsculas
    const fileExtension = path.extname(file.originalname).toLowerCase();
    // Verifica si la extensión del archivo está incluida en la lista de tipos de archivo permitidos
    if (allowedFileTypes.includes(fileExtension)) {
      // Si la extensión está permitida, llama a la función de devolución de llamada con el indicador de que el archivo es válido
      cb(null, true);
    } else {
      // Si la extensión no está permitida, llama a la función de devolución de llamada con un error
      cb(new Error("Solo se permiten archivos en formato png o jpg"));
    }
  },
}).fields([
  { name: "firma_aprendiz", maxCount: 1 },
  { name: "firma_instructor_seguimiento", maxCount: 1 },
  { name: "firma_ente_conformador", maxCount: 1 }, // Corregir el nombre del tercer campo
]);


exports.cargarPlaneacionAprendiz = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      // Si hay un error en la carga del archivo, devuelve una respuesta de error
      if (err) {
        return res.status(400).json({ mensaje: err.message });
      }
      await Evaluacion.sync({ force: false });

      // Busca un aprendiz en la base de datos utilizando el ID proporcionado en los parámetros de la solicitud.
      const aprendiz = await Aprendices.findOne({
        where: {
          id_aprendiz: req.params.id_aprendiz,
        },
      });

      // Si no se encuentra el aprendiz, elimina el archivo subido y devuelve un mensaje de error.
      if (!aprendiz) {
        fs.unlinkSync(req.file.path); // Eliminar el archivo si el aprendiz no existe
        return res.status(404).json({ mensaje: "El aprendiz no existe" });
      }

      const evaluacionInfo = {
        id_aprendiz: req.params.id_aprendiz,
        ...req.body,
        firma_aprendiz: req.files["firma_aprendiz"] ? req.files["firma_aprendiz"][0].filename : null,
        firma_instructor_seguimiento: req.files["firma_instructor_seguimiento"] ? req.files["firma_instructor_seguimiento"][0].filename : null,
        firma_ente_conformador: req.files["firma_ente_conformador"] ? req.files["firma_ente_conformador"][0].filename : null,
      };

      const evaluacionAprendiz = await Evaluacion.create(evaluacionInfo);

      res.status(201).json({
        message: "La evaluación al aprendiz se ha registrado correctamente",
        evaluacionEP: evaluacionAprendiz,
      });
    });
  } catch (error) {
    console.log(
      "Error al registrar la evaluación de etapa productiva del aprendiz",
      error
    );
    res.status(500).json({
      message:
        "Error al registrar la evaluación de etapa productiva del aprendiz",
      error,
    });
  }
};

