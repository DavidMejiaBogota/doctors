import { Router } from 'express';
import { getCitas, getOneCita, createCita, updateCita, deleteCita } from '../controller/cita.controller';

const router = Router();

router.get('/', getCitas);

router.get('/unica', getOneCita);

router.post('/', createCita);

router.put('/', updateCita);

router.delete('/', deleteCita);

export default router;