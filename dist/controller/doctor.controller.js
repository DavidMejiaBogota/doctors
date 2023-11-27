"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoctor = exports.updateDoctor = exports.createDoctor = exports.getDoctorByid = exports.getDoctores = void 0;
const doctores_model_1 = require("../models/doctores.model");
//Para traer todos los registros(doctores)
const getDoctores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctores = yield doctores_model_1.Doctor.findAll();
        res.status(200).json({
            message: 'Operación exitosa',
            data: doctores
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            messaage: 'Error al obtener los doctores',
            error: err.message
        });
    }
});
exports.getDoctores = getDoctores;
//Para traer doctor por id.
const getDoctorByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            res.status(200).json({
                message: 'Operación exitosa',
                data: doctor
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            messaage: 'Error al obtener los doctorres',
            error: error.message
        });
    }
});
exports.getDoctorByid = getDoctorByid;
//Se crea el método para crear doctores.
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.create(req.body);
        if (doctor) {
            res.status(201).json({
                message: 'Operación exitosa, se ha creado el doctor',
                data: doctor
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo crear el doctor',
            error: error.message
        });
    }
});
exports.createDoctor = createDoctor;
//Se crea el método para actualizar doctores.
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctores_model_1.Doctor.update(req.body, {
                where: {
                    id_profesional: req.params.id
                }
            });
            res.status(200).json({
                message: 'Operación exitosa, se ha actualizado el doctor',
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo actualizar el doctor',
            error: error.message
        });
    }
});
exports.updateDoctor = updateDoctor;
//Se crea el método para eliminar doctores.
const deleteDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctores_model_1.Doctor.destroy({
                where: {
                    id_profesional: req.params.id
                }
            });
            res.status(200).json({
                message: 'Operación exitosa, se ha eliminado el doctor',
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no encontrado',
                data: null
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo elminar el doctor',
            error: error.message
        });
    }
});
exports.deleteDoctor = deleteDoctor;
