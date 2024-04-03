// Event.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Visitas = sequelize.define('Visitas', {
    id_visita:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    tipo_visita: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: true // Permitir valores nulos para la hora de finalización
    },
    aprendiz:{
        type: DataTypes.UUID,
        allowNull: false
    },
    documento_aprendiz: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombres_aprendiz: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos_aprendiz: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_ficha_aprendiz: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    programa_formacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    sequelize,
    modelName: 'Visitas'
});

module.exports = Visitas;

