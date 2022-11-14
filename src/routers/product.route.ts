import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';
import productValidation from '../middlewares/productValidation.middleware';

const router = Router();

router.post('/products', productValidation, ProductController.create);
router.get('/products', ProductController.findAll);

export default router;
