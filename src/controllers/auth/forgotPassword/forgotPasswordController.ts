import { Request, Response } from 'express';
import ForgotPasswordUseCase from '../../../usecases/auth/forgotPassword/forgotPasswordUseCase';

class ForgotPasswordController {
  async handleForgotPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      await ForgotPasswordUseCase.execute(email);
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default new ForgotPasswordController();
