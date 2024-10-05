const{ Sequelize } = require('sequelize');

const sequelize = new Sequelize('parqueadero', 'root', 'admin', {
    host: 'localhost',
    dialect:'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Conexión a MySql Exitosa'))
    .catch((err) =>console.log('Error al conectar a MySql: ', err));

    module.exports = sequelize;

