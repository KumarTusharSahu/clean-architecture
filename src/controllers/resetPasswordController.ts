import { Request, Response } from 'express';
import ResetPasswordUseCase from '../usecases/resetPasswordUseCase';

class ResetPasswordController {
  async handleResetPassword(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      const {newPassword } = req.body;
      await ResetPasswordUseCase.execute(id, newPassword);
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default new ResetPasswordController();
