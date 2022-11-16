import { Router } from 'express';
import OrderControllerFindAll from '../controllers/order.controller';

const router = Router();

router.get('/orders', OrderControllerFindAll);

export default router;
