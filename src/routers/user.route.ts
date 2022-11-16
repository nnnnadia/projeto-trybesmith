import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import loginValidation from '../middlewares/loginValidation.middleware';
import userValidation from '../middlewares/userValidation.middleware';

const router = Router();

router.post('/login', loginValidation, UserController.login);
router.post('/users', userValidation, UserController.create);

export default router;
