import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: process.env.USERNAME, //'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    logging: false,
    models : [__dirname+'/models']
});

export default connection;