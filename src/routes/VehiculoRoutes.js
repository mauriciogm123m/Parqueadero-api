const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

// Ruta para obtener todos los vehículos
router.get('/', vehiculoController.getAllVehiculos);

// Ruta para crear un vehículo nuevo
router.post('/', vehiculoController.createVehiculo);

// Ruta para obtener un vehículo por su ID
router.get('/:id', vehiculoController.getVehiculoById);

// Ruta para actualizar un vehículo
router.put('/:id', vehiculoController.updateVehiculo);

// Ruta para eliminar un vehículo
router.delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;
