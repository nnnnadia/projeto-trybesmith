import { Router } from 'express';
import * as OrderController from '../controllers/order.controller';
import orderValidation from '../middlewares/orderValidation.middleware';
import tokenJWTValidation from '../middlewares/tokenJWTValidation.middleware';

const router = Router();

router.get('/orders', OrderController.findAll);
router.post('/orders', tokenJWTValidation, orderValidation, OrderController.create);

export default router;
