const Visitas = require("../models/Visita");
const Aprendices = require("../models/Aprendices");
const moment = require("moment");
const { Op } = require("sequelize");

exports.crearEvento = async (req, res) => {
  const id_aprendiz = req.params.id_aprendiz;
  const { tipo_visita, fecha, hora_inicio, hora_fin, lugar_visita, modalidad_visita } = req.body;

  try {
    await Visitas.sync({ force: false });
    const aprendices = await Aprendices.findOne({
      where: { id_aprendiz: id_aprendiz },
    });

    if (aprendices) {
      // Validar tipo de visita
      if (tipo_visita.toLowerCase() === 'primera visita' || tipo_visita.toLowerCase() === 'segunda visita' || tipo_visita.toLowerCase() === 'tercera visita') {
        // Verificar si hay una visita del mismo tipo para el aprendiz en cualquier fecha
        const visitaTipoExistente = await Visitas.findOne({
          where: {
            aprendiz: id_aprendiz,
            tipo_visita: tipo_visita.toLowerCase(),
          },
        });

        if (visitaTipoExistente) {
          return res.status(400).json({
            error: "Ya está agendada una visita de este tipo para el aprendiz",
          });
        }

        // Verificar si hay una visita agendada en el mismo día con horas posteriores
        const visitaPrevia = await Visitas.findOne({
          where: {
            aprendiz: id_aprendiz,
            fecha: fecha,
            hora_fin: { [Op.gte]: hora_inicio }, // Verificar si la hora de inicio es posterior o igual a la hora de finalización de alguna visita previa
          },
        });

        if (visitaPrevia) {
          return res.status(400).json({
            error: "La nueva visita debe ser programada en horas posteriores a la hora de inicio y de finalización de la visita anterior.",
          });
        }
      } else {
        return res.status(400).json({
          error: "El tipo de visita debe ser 'Primera visita', 'Segunda visita' o 'Tercera visita'.",
        });
      }

      // Permitir la creación de la nueva visita si no hay visitas del mismo tipo para el aprendiz en cualquier fecha
      const nuevaVisita = await Visitas.create({
        tipo_visita: tipo_visita.toLowerCase(),
        fecha,
        hora_inicio,
        hora_fin,
        lugar_visita,
        modalidad_visita,
        aprendiz: id_aprendiz,
        documento_aprendiz: aprendices.numero_documento,
        nombres_aprendiz: aprendices.nombres,
        apellidos_aprendiz: aprendices.apellidos,
        numero_ficha_aprendiz: aprendices.numero_ficha,
        programa_formacion: aprendices.programa_formacion,
      });

      return res.json(nuevaVisita);
    } else {
      res.status(404).json({ mensaje: "No se encontró el aprendiz" });
    }
  } catch (error) {
    console.error("Error creando el evento:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



// Obtener todos los eventos del calendario
exports.obtenerEventos = async (req, res) => {
  try {
    const visitas = await Visitas.findAll(); // utiliza el modelo Calendar en la BD
    res.status(201).json({
      visitas: visitas,
    }); // método findAll para recuperar eventos almacenados en la BD
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.obtenerEventosAprendiz = async (req, res) => {
  try {
    // Pasa un id por la url
    const idAprendiz = req.params.id_aprendiz;
    const visitas = await Visitas.findAll({
      where: {
        aprendiz: idAprendiz,
      },
    });
    if (visitas) {
      res.status(200).json({
        visitas: visitas,
      });
    } else {
      res.status(404).json({
        mensaje: "No se pudo encontrar visitas",
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en el servidor",
    });
  }
};

exports.actualizarEventos = async (req, res) => {
  try {
    const idVisita = req.params.id_visita;
    const visita = await Visitas.findOne({
      where: {
        id_visita: idVisita,
      },
    });
    if (visita) {
      const actualizarVisita = await visita.update(req.body);
      res.status(200).json({
        visitaActualizada: actualizarVisita,
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en el servidor",
    });
  }
};

exports.eliminarEvento = async (req, res) => {
  try {
    const idVisita = req.params.id_visita;
    const visita = await Visitas.findOne({
      where: {
        id_visita: idVisita,
      },
    });
    if (visita) {
      const eliminarVisita = await visita.destroy();
      res.json({ mensaje: "La visita se ha eliminado" });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en el servidor",
    });
  }
};
