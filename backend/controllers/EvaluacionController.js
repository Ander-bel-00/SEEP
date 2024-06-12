// Importar el modelo de la tabla evaluacion.
const Evaluacion = require("../models/EvaluacionEP");
// Importar el modelo de Aprendices.
const Aprendices = require("../models/Aprendices");

exports.cargarPlaneacionAprendiz = async (req, res, next) => {
  try {
    await Evaluacion.sync({ force: false });

    const aprendiz = await Aprendices.findOne({
      where: {
        id_aprendiz: req.params.id_aprendiz,
      },
    });

    if (!aprendiz) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado ese aprendiz" });
    }

    // Validación de fecha_actividad
    if (req.body.fecha_actividad.some(fecha => isNaN(new Date(fecha)))) {
      return res.status(400).json({ message: "Fecha inválida en fecha_actividad" });
    }

    const evaluacionAprendiz = await Evaluacion.create({
      id_aprendiz: req.params.id_aprendiz,
      ...req.body,
    });

    res.status(201).json({
      message:
        "La evaluación de etapa productiva del aprendiz se registró correctamente",
      evaluacionAprendiz,
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
    next();
  }
};
