const express = require('express');
require('dotenv').config();
const { dbConnection } = require('../Database/ConfigDB');
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            usuariosPath: '/api/usuarios',
            empleadoPath: '/api/empleados',
            usuarioAuthPath: '/api/auth',
            sesionPath: '/api/sesiones',
            salaPath: '/api/salas',
            capturaPath: '/api/capturas',
            uploadCapturaPath: '/api/uploadCaptura'
        }

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // Cors
        this.app.use(cors({
            origin: '*',
        }));

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('Public'));
            //Carga de archivos
            this.app.use(fileUpload({
                useTempFiles : true,
                tempFileDir : '/tmp/'
            }));
    }

    routes(){
        this.app.use(this.path.usuariosPath, require('../Routes/UsuarioRute'));
        this.app.use(this.path.usuarioAuthPath, require('../Routes/Auth'));
        this.app.use(this.path.empleadoPath, require('../Routes/EmpleadoRoute'));
        this.app.use(this.path.sesionPath, require('../Routes/SesionRoute'));
        this.app.use(this.path.salaPath, require('../Routes/SalaRute'));
        this.app.use(this.path.capturaPath, require('../Routes/CapturaRoute'));
        this.app.use(this.path.uploadCapturaPath, require('../Routes/CargarCapturaRoute'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}


module.exports = Server;