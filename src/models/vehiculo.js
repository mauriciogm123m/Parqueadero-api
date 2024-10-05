const { DataTypes } = require('sequelize');
const sequelize = require('../config/Bd');

const vehiculo = sequelize.define('vehiculo', {
    plate: { type: DataTypes.STRING, allowNull: false, unique: true },
    type: { type: DataTypes.ENUM('Carro', 'Moto'), allowNull: false },
    entryTime: { type: DataTypes.DATE, allowNull: false }
});

module.exports = vehiculo;