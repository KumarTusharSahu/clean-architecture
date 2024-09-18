import User, { IUser } from '../entities/user';

class UserRepository {
  async create(user: IUser): Promise<IUser> {
    return await user.save();
  }

  async findByUsername(username: string): Promise<IUser | null> {
    return await User.findOne({ username });
  }

  async findByResetPasswordToken(token: string): Promise<IUser | null> {
    return await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
  }
}

export default new UserRepository();
