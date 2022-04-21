const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //middleware
        this.middlewares();

        //lectura y parseo del body
        this.app.use( express.json() );

        //rutas de mi app
        this.routes();
   
    }
    
    middlewares() {

        //CORS
        this.app.use( cors());

        //rutas publicas
        this.app.use( express.static('public'));
    }

    routes() {
       
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;