const express = require('express');
const app = express();
const vehiculoRoutes = require('./routes/VehiculoRoutes');
const sequelize = require('./config/Bd');

// Middleware para el parseo de JSON
app.use(express.json());

// Rutas
app.use('/api/vehiculo', vehiculoRoutes);

// Sincronizar con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos conectada');
        // Iniciar el servidor
        app.listen(3000, () => {
            console.log('Servidor corriendo en http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
    });
