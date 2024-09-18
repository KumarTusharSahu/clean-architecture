import { Request, Response } from 'express';
import ResetPasswordUseCase from '../../../usecases/auth/resetPassword/resetPasswordUseCase';

class ResetPasswordController {
  async handleResetPassword(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      const {newPassword } = req.body;
      const {confirmPassword } = req.body;
      if(newPassword === confirmPassword){
        await ResetPasswordUseCase.execute(id, newPassword);
        res.status(200).json({ message: 'Password reset successful' });
      }
      else{
        res.status(400).json({ "message": "New password and confirm password do not match" });
      }
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new ResetPasswordController();
