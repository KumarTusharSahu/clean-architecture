import { Router } from 'express';
import registerUserController from '../controllers/registerUserController';
import loginUserController from '../controllers/loginUserController';

const router = Router();

router.post('/register', registerUserController.handle);
router.post('/login', loginUserController.handle);

export default router;
