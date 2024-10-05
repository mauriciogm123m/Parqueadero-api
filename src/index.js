const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // interpretar json para las solicitudes

const VehiculoRoutes = require('./routes/VehiculoRoutes'); // importamos las rutas
app.use('/api/vehiculos', VehiculoRoutes);

// iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
