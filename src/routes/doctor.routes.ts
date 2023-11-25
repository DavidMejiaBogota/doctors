import { Router } from "express";
import { createDoctor, deleteDoctor, getDoctorByid, getDoctores, updateDoctor } from "../controller/doctor.controller";

const router = Router();

router.get('/', getDoctores);
router.get('/:id', getDoctorByid);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;