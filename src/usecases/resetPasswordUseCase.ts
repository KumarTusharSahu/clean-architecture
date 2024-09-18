import userRepository from '../repositories/userRepository';
import bcrypt from 'bcryptjs';

class ResetPasswordUseCase {
  async execute(id:string, newPassword: string): Promise<void> {
    const user = await userRepository.findByResetToken(id);

    if (!user || !user.resetPasswordExpires || user.resetPasswordExpires < new Date()) {
      throw new Error('Token is invalid or has expired');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
  }
}

export default new ResetPasswordUseCase();
