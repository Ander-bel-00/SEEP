const Empresa = require("../models/Empresa");

// Controlador para registrar una empresa en  la base de datos.
exports.nuevaEmpresa = async (req, res, next) => {
  try {
    // Si la tabla no existe la crea, si existe la deja como está y no se peirden datos.
    await Empresa.sync({ force: false });

    const empresaExiste = await Empresa.findOne({
      nit_empresa: req.body.nit_empresa,
    });

    if (empresaExiste)
      return res
        .status(500)
        .json({ message: "La empresa ya se encuentra registarda" });
    const empresaData = req.body;
    await Empresa.create(empresaData);

    res
      .status(201)
      .json({
        message: "La empresa se ha registrado exitosamente",
        empresa: empresaData,
      });
  } catch (error) {
    console.error("Error al registrar la empresa", error);
    res
      .status(500)
      .json({ message: "Hubo un error al registrar la empresa", error });
      next();
  }
};

// Controaldor para obtener lso datos de la empresa por el id de la empresa.
exports.obtenerDatosEmpresa = async (req, res) => {
    const id_empresa = req.params.id_empresa;
    if (!id_empresa) return res.status(500).json({ message: 'Debe proporcionar el id de la empresa'});
    try {
        const empresa = await Empresa.findOne({
            where: {
                id_empresa: id_empresa,
            }
        });
        if (!empresa) return res.status(404).json({message: 'No se ha encontardo la empresa con el id proporciondo'});
        res.status(200).json({ empresa: empresa });
    } catch (error) {
        console.error('Hubo un error en  la solicitud', error);
        res.status(500).json({ message: 'Hubo un error en la solicitud' , error });
    }
};