import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Paciente } from '../models/paciente.model';
import { Cita } from '../models/cita.model';
import { Doctor } from '../models/doctores.model';


dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DB_PORT),
    logging: false,
    models : [Paciente, Cita, Doctor]
});

export default connection;