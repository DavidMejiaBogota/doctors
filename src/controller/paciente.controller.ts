import { RequestHandler } from "express";
import {Paciente} from "../models/paciente.model";

export const getPacientes: RequestHandler = async (req, res) => {
    try{
        const pacientes = await Paciente.findAll();
        res.status(200).json({
            message: 'Operación exitosa',
            data: pacientes
        });
    }catch (error) {
        const err = error as Error;
        res.status(500).json({
            messaage: 'Error al obtener los pacientes',
            error: err.message
        })
    }
}