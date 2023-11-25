"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const doctores_model_1 = require("./doctores.model");
const paciente_model_1 = require("./paciente.model");
let Cita = class Cita extends sequelize_typescript_1.Model {
};
exports.Cita = Cita;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", Date)
], Cita.prototype, "fecha_hora", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => doctores_model_1.Doctor),
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Cita.prototype, "id_profesional", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => paciente_model_1.Paciente),
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Cita.prototype, "id_numeroCedula", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => doctores_model_1.Doctor),
    __metadata("design:type", doctores_model_1.Doctor)
], Cita.prototype, "doctor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => paciente_model_1.Paciente),
    __metadata("design:type", paciente_model_1.Paciente)
], Cita.prototype, "paciente", void 0);
exports.Cita = Cita = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'cita'
    })
], Cita);
