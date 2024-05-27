// index.js
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars').create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
});
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const routes = require('./routes');
const { sequelize, testConnection } = require('./config/database');

// Importar los modelos desde el archivo centralizado
const models = require('./models');

const app = express();

// Testear la conexión a la base de datos.
testConnection();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'my-secret-key', // Cambia esto por tu propia clave secreta
    resave: false,
    saveUninitialized: true
}));

// Habilitar cors.
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Establecer las cookies al frontend.
}));

// Configurar Handlebars como motor de plantillas
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', routes());

const port = process.env.PORT || 5000;

// Sincronizar los modelos con la base de datos
async function startServer() {
    try {
        await sequelize.sync({ force: false }); // Cambia a true si quieres que se eliminen y vuelvan a crearse las tablas en cada reinicio del servidor
        console.log('Database synchronized');

        // Escuchar en el puerto
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

// Iniciar el servidor
startServer();
