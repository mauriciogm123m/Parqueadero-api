const vehiculo = require('../models/vehiculo');
const vehiculo = require('../models/vehiculo');
const vehiculo = require ('../models/vehiculo');

// Obtener todos los vehiculos
const getAllVehiculos = async (req, res) => {
    const vehiculos = await vehiculo.findAll();

    res.json(vehiculos);
};

// creamos un vehiculo 
const createVehiculo = async (req, res) => {
    try {
        const { plate, type } = req.body;
        const vehiculo = await vehiculo.create({ plate, type, entryTime: new Date()});
    } catch (error) {
        res.status(400).json({message: 'error al crear el vehículo'});
    }
};

module.exports = {getAllVehiculos, createVehiculo};