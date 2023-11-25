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
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPacientesByid = exports.getPacientes = void 0;
const paciente_model_1 = require("../models/paciente.model");
//Para traer todos los registros(pacientes)
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield paciente_model_1.Paciente.findAll();
        res.status(200).json({
            message: 'Operación exitosa',
            data: pacientes
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            messaage: 'Error al obtener los pacientes',
            error: err.message
        });
    }
});
exports.getPacientes = getPacientes;
//Para traer paciente por id.
const getPacientesByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json({
                message: 'Operación exitosa',
                data: paciente
            });
        }
        else {
            res.status(404).json({
                message: 'Paciente no encontrado',
                data: null
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            messaage: 'Error al obtener los pacientes',
            error: error.message
        });
    }
});
exports.getPacientesByid = getPacientesByid;
//Se crea el método para crear pacientes.
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.create(req.body);
        if (paciente) {
            res.status(201).json({
                message: 'Operación exitosa, se ha creado el paciente',
                data: paciente
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo crear el paciente',
            error: error.message
        });
    }
});
exports.createPaciente = createPaciente;
//Se crea el método para actualizar pacientes.
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_model_1.Paciente.update(req.body, {
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            res.status(200).json({
                message: 'Operación exitosa, se ha actualizado el paciente',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo actualizar el paciente',
            error: error.message
        });
    }
});
exports.updatePaciente = updatePaciente;
//Se crea el método para eliminar pacientes.
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_model_1.Paciente.destroy({
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            res.status(200).json({
                message: 'Operación exitosa, se ha eliminado el paciente',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'No se pudo elminar el paciente',
            error: error.message
        });
    }
});
exports.deletePaciente = deletePaciente;
