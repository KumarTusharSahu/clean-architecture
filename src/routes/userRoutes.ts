import { Router } from 'express';
import RegisterUserController from '../controllers/registerUserController';
import ForgotPasswordController from '../controllers/forgotPasswordController';
import ResetPasswordController from '../controllers/resetPasswordController';
import loginUserController from '../controllers/loginUserController';

import validate from '../middlewares/validationMiddleware';
import loginSchema from '../validations/loginValidation'; 

const router = Router();

// Route to register a new user
router.post('/register', validate(loginSchema), RegisterUserController.handleRegisterUser);

// Route for user login
router.post('/login', loginUserController.handleUserLogin);

// Route to request a password reset (forgot password)
router.post('/forgot-password', ForgotPasswordController.handleForgotPassword);

// Route to reset the password using the token
router.post('/reset-password/:id', ResetPasswordController.handleResetPassword);

export default router;
