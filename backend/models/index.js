const { sequelize } = require('../config/database');

const Admin = require('./Admin');
const Aprendiz = require('./Aprendices');
const Bitacora = require('./Bitacoras');
const Documento = require('./Documentos');
const Ficha = require('./Fichas');
const Instructor = require('./Instructor');
const Visita = require('./Visita');

// Define las relaciones aquí

const AdminFichaAprendizInstructor = require('./AdminFichaAprendizInstructor');

Admin.belongsToMany(Ficha, { through: AdminFichaAprendizInstructor });
Ficha.belongsToMany(Admin, { through: AdminFichaAprendizInstructor });

Admin.belongsToMany(Aprendiz, { through: AdminFichaAprendizInstructor });
Aprendiz.belongsToMany(Admin, { through: AdminFichaAprendizInstructor });

Admin.belongsToMany(Instructor, { through: AdminFichaAprendizInstructor });
Instructor.belongsToMany(Admin, { through: AdminFichaAprendizInstructor });

Instructor.hasMany(Ficha, { foreignKey: 'id_instructor' });
Ficha.belongsTo(Instructor, { foreignKey: 'id_instructor' });

Aprendiz.belongsTo(Ficha, { foreignKey: 'numero_ficha' });
Ficha.hasMany(Aprendiz, { foreignKey: 'numero_ficha' });

Bitacora.belongsTo(Aprendiz, { foreignKey: 'id_aprendiz' });
Aprendiz.hasMany(Bitacora, { foreignKey: 'id_aprendiz' });

Documento.belongsTo(Aprendiz, { foreignKey: 'id_aprendiz' });
Aprendiz.hasMany(Documento, { foreignKey: 'id_aprendiz' });

Visita.belongsTo(Aprendiz, { foreignKey: 'id_aprendiz' });
Aprendiz.hasMany(Visita, { foreignKey: 'id_aprendiz' });

module.exports = {
    sequelize,
    Admin,
    Aprendiz,
    Bitacora,
    Documento,
    Ficha,
    Instructor,
    Visita,
};
