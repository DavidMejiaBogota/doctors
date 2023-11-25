import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Paciente } from '../models/paciente.model';
import { Cita } from '../models/cita.model';
import { Doctor } from '../models/doctores.model';


dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: 'root',//process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    logging: false,
    models : [Paciente, Cita, Doctor]
});

export default connection;