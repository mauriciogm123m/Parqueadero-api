const { DataTypes } = require('sequelize');
const sequelize = require('../config/Bd');

const Vehiculo = sequelize.define('Vehiculo', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'vehiculo',
    timestamps: false
});

module.exports = Vehiculo;
