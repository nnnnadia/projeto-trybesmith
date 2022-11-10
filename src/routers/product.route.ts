import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const router = Router();

router.post('/products', ProductController.create);

export default router;
