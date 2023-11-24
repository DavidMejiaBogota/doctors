import { RequestHandler } from "express";
import {Paciente} from "../models/paciente.model";

//Para traer todos los registros(pacientes)
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
//Para traer paciente por id.
export const getPacientesByid: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json({
                message: 'Operación exitosa',
                data: paciente
            });
        } else {
            res.status(404).json({
                message: 'Paciente no encontrado',
                data: null
            })
        }
    }catch (error:any) {
        const err = error as Error;
        res.status(500).json({
            messaage: 'Error al obtener los pacientes',
            error: error.message
        })
    }
}

//Se crea el método para crear pacientes.
export const createPaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.create(req.body);
        if (paciente) {
            res.status(201).json({
                message: 'Operación exitosa, se ha creado el paciente',
                data: paciente
            })
        }
    }catch(error:any){
        res.status(500).json({
            message: 'No se pudo crear el paciente',
            error: error.message
        });
    }
}

//Se crea el método para actualizar pacientes.