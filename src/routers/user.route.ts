import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import loginValidation from '../middlewares/loginValidation.middleware';

const router = Router();

router.post('/login', loginValidation, UserController.login);
router.post('/users', UserController.create);

export default router;
