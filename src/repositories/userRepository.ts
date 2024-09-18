import User, { IUser } from '../entities/user';

class UserRepository {
  async create(user: IUser): Promise<IUser> {
    return await user.save();
  }

  async findByUsername(username: string): Promise<IUser | null> {
    return await User.findOne({ username });
  }
}

export default new UserRepository();
