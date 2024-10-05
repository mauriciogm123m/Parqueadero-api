const express = require('express');
const router = express.Router();
const { getAllVehiculos, createVehiculo } = require('../controllers/vehiculoController');

// Obtener todos los vehiculos

router.get('/', getAllVehiculos);

router.get('/', createVehiculo);

module.exports = router;