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
exports.deleteCita = exports.updateCita = exports.createCita = exports.getOneCita = exports.getCitas = void 0;
const cita_model_1 = require("../models/cita.model");
const getCitas = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const citas = yield cita_model_1.Cita.findAll();
        res.status(200).json({ message: 'Operación exitosa', data: citas });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: 'Hubo un error al obtener las citas', error: err.message });
    }
});
exports.getCitas = getCitas;
const getOneCita = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const cita = yield cita_model_1.Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
        if (cita) {
            res.status(200).json({ message: 'Operación exitosa', data: cita });
        }
        else {
            res.status(404).json({ message: 'Cita no encontrada' });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: 'Hubo un error al obtener la cita', error: err.message });
    }
});
exports.getOneCita = getOneCita;
// GET /citas/unica?profesional=valor&paciente=valor1&fecha=valor2
const createCita = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*
        const { id_profesional, id_numeroCedula, fecha_hora } = req.body;
        const fecha = new Date(fecha_hora);
        const id_cita = `${id_profesional}${id_numeroCedula}${fecha.getDate()}${fecha.getMonth() + 1}${fecha.getFullYear()}${fecha.getHours()}${fecha.getMinutes()}`;
        req.body.id_cita = BigInt(id_cita);
        */
        const cita = yield cita_model_1.Cita.create(req.body);
        res.status(201).json({ message: 'Cita creada exitosamente', data: cita });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: 'Hubo un error al crear la cita', error: err.message });
    }
});
exports.createCita = createCita;
const updateCita = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        console.log(profesional, paciente, fecha);
        const fechaDate = new Date(fecha);
        const cita = yield cita_model_1.Cita.findOne({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
        if (!cita) {
            res.status(404).json({ message: 'Cita no encontrada' });
            return;
        }
        else {
            yield cita_model_1.Cita.update(req.body, { where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
            res.status(200).json({
                message: 'Cita actualizada exitosamente'
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: 'Hubo un error al actualizar la cita', error: err.stack });
    }
});
exports.updateCita = updateCita;
const deleteCita = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
        const fechaDate = new Date(fecha);
        const cita = yield cita_model_1.Cita.findOne({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
        if (!cita) {
            res.status(404).json({ message: 'Cita no encontrada' });
            return;
        }
        else {
            yield cita_model_1.Cita.destroy({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
            res.status(200).json({ message: 'Cita eliminada exitosamente' });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: 'Hubo un error al eliminar la cita', error: err.message });
    }
});
exports.deleteCita = deleteCita;
