"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//main de la aplicaicón/el servidor.
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
//app.use(urlencoded() );
app.use(express_1.default.urlencoded({ extended: true })); //se establece esta opcion porque me estaba generando un error "body-parser deprecated undefined extended: provide extended option src\app.ts:16:38 Error: listen EACCES: permission denied 3000" 
//Se define ruta para la raiz
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});
//Se definen rutas inexistentes (Es importate siempre poner el error 404 antes del 500 en caso de que no exista la ruta y no se vaya directo a error del servidor) 
app.use((req, res) => {
    res.status(404).send('404: Page not foud');
});
//Se define el error 500 en caso de falla en el servidor.
app.use((req, res) => {
    res.status(500).send('500: Internal Server Error');
});
//Se establece la coneccion con la base de datos.
config_1.default.sync()
    .then(() => {
    console.log('Database online');
})
    .catch((err) => {
    console.log('Erreor en la conexión con la base de datos ${err}');
});
//Se pone a escuchar la aplicación.
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en: http://${process.env.HOST}/${process.env.PORT}`);
});
