DROP DATABASE IF EXISTS citas;
CREATE DATABASE IF NOT EXISTS citas CHARACTER SET utf8mb4;
USE citas;
CREATE TABLE doctor (
 id_profesional INT NOT NULL,
 nombre VARCHAR(50) NOT NULL,
 apellido VARCHAR(50) NOT NULL,
 correo VARCHAR(50) NOT NULL,
 especialidad ENUM('medicina_interna', 'medicina_general') NOT NULL,
 PRIMARY KEY (id_profesional)
);
CREATE TABLE paciente(
 id_numeroCedula INT NOT NULL,
 nombre VARCHAR(50) NOT NULL,
 apellido VARCHAR(50) NOT NULL,
 telefono VARCHAR(15) NOT NULL,
 edad DATE NOT NULL,
 PRIMARY KEY (id_numeroCedula)
);
CREATE TABLE cita (
 fecha_hora DATETIME NOT NULL,
 id_profesional INT NOT NULL,
 id_numeroCedula INT NOT NULL,
 FOREIGN KEY(id_profesional) REFERENCES doctor (id_profesional),
 FOREIGN KEY(id_numeroCedula) REFERENCES paciente (id_numeroCedula),
 PRIMARY KEY(id_profesional, id_numeroCedula, fecha_hora)
);