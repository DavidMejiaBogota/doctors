import { RequestHandler } from 'express';
import { Doctor } from '../models/doctores.model';

//Para traer todos los registros(doctores)
export const getDoctores: RequestHandler = async (req, res) => {
    try{
        const doctores = await Doctor.findAll();
        res.status(200).json({
            message: 'Operación exitosa',
            data: doctores
        });
    }catch (error) {
        const err = error as Error;
        res.status(500).json({
            messaage: 'Error al obtener los doctores',
            error: err.message
        })
    }
}

//Para traer doctor por id.
export const getDoctorByid: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor) {
            res.status(200).json({
                message: 'Operación exitosa',
                data: doctor
            });
        } else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            })
        }
    }catch (error:any) {
        const err = error as Error;
        res.status(500).json({
            messaage: 'Error al obtener los doctorres',
            error: error.message
        })
    }
}

//Se crea el método para crear doctores.
export const createDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.create(req.body);
        if (doctor) {
            res.status(201).json({
                message: 'Operación exitosa, se ha creado el doctor',
                data: doctor
            })
        }
    }catch(error:any){
        res.status(500).json({
            message: 'No se pudo crear el doctor',
            error: error.message
        });
    }
}

//Se crea el método para actualizar doctores.
export const updateDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor){
            await Doctor.update(req.body, {
                where: {
                    id_profesional: req.params.id
                }
            });
                res.status(200).json({
                    message: 'Operación exitosa, se ha actualizado el doctor',
                });
        } else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            });
        }
        
    }catch(error:any){
        res.status(500).json({
            message: 'No se pudo actualizar el doctor',
            error: error.message
        });
    }
}

//Se crea el método para eliminar doctores.
export const deleteDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        
        if (doctor){
            await Doctor.destroy({
                where: {
                    id_profesional: req.params.id
                }
            });
                res.status(200).json({
                    message: 'Operación exitosa, se ha eliminado el doctor',
                });
        } else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            });
        }
    }catch(error:any){
        res.status(500).json({
            message: 'No se pudo elminar el doctor',
            error: error.message
        });
    }
}

