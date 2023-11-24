//main de la aplicaicón/el servidor.
import express from "express";
import connection from "./db/config";
import {Request, Response} from "express";
import { urlencoded, json } from "body-parser";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser = require("body-parser");
import pacineteRoutes from "./routes/paciente.routes";
dotenv.config();

const app = express();

app.use( json() );
app.use( cors() );
//app.use(urlencoded() );
app.use(express.urlencoded({ extended: true }));//( urlencoded() ) //se establece esta opcion porque me estaba generando un error "body-parser deprecated undefined extended: provide extended option src\app.ts:16:38 Error: listen EACCES: permission denied 3000" 
//Se define ruta para la raiz
app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido a mi API')
});
//Se definen rutas inexistentes (Es importate siempre poner el error 404 antes del 500 en caso de que no exista la ruta y no se vaya directo a error del servidor) 
app.use( (req: Request, res: Response) => {
    res.status(404).send('404: Page not foud')
});
//Se define el error 500 en caso de falla en el servidor.
app.use( (req: Request, res: Response) =>{
    res.status(500).send('500: Internal Server Error');
});


app.use('/api/pacientes', pacineteRoutes);

//Se establece la coneccion con la base de datos.
connection.sync()
.then(() => {
    console.log('Database online');
})
.catch((err) => {
    console.log(`Erreor en la conexión con la base de datos ${err}`);
});
//Se pone a escuchar la aplicación.
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en: http://${process.env.HOST}:${process.env.PORT}`);
});
