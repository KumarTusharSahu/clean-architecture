import { Router } from 'express';
// import RegisterUserController from '../controllers/registerUserController';
import RegisterUserController from '../controllers/auth/register/registerUserController';
// import ForgotPasswordController from '../controllers/auth/forgotPassword/forgotPasswordController';
import ForgotPasswordController from '../controllers/auth/forgotPassword/forgotPasswordController';
// import ResetPasswordController from '../controllers/resetPasswordController';
import ResetPasswordController from '../controllers/auth/reset/resetPasswordController';
// import loginUserController from '../controllers/auth/login/loginUserController';
import loginUserController from '../controllers/auth/login/loginUserController';

import validate from '../middlewares/validationMiddleware';
import loginSchema from '../validations/loginValidation'; 
import resetSchema from '../validations/resetValidation';

const router = Router();

// Route to register a new user
router.post('/register', validate(loginSchema), RegisterUserController.handleRegisterUser);

// Route for user login
router.post('/login', loginUserController.handleUserLogin);

// Route to request a password reset (forgot password)
router.post('/forgot-password', ForgotPasswordController.handleForgotPassword);

// Route to reset the password using the token
router.post('/reset-password/:id', validate(resetSchema), ResetPasswordController.handleResetPassword);

export default router;
