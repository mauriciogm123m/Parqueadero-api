const Vehiculo = require('../models/vehiculo');

// Obtener todos los vehículos
exports.getAllVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los vehículos' });
    }
};

// Crear un vehículo nuevo
exports.createVehiculo = async (req, res) => {
    try {
        const { tipo, placa } = req.body;

        // Contar los vehículos existentes según el tipo
        const countVehiculos = await Vehiculo.count({ where: { tipo } });

        if ((tipo === 'carro' && countVehiculos >= 5) || (tipo === 'moto' && countVehiculos >= 10)) {
            return res.status(400).json({ error: `No hay cupos disponibles para ${tipo}s` });
        }

        // Crear el nuevo vehículo si hay cupo
        const nuevoVehiculo = await Vehiculo.create({ tipo, placa });
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el vehículo', message: error.message });
    }
};


// Obtener un vehículo por ID
exports.getVehiculoById = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el vehículo' });
    }
};

// Actualizar un vehículo
exports.updateVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        const { tipo, placa } = req.body;
        vehiculo.tipo = tipo;
        vehiculo.placa = placa;
        await vehiculo.save();
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el vehículo' });
    }
};

// Eliminar un vehículo
exports.deleteVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        await vehiculo.destroy();
        res.json({ message: 'Vehículo eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el vehículo' });
    }
};
