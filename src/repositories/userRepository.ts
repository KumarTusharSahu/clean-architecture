import User, { IUser } from '../entities/user';

class UserRepository {
  // Find a user by their email
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }

  // Find a user by the reset token (used for password reset)
  async findByResetToken(token: string): Promise<IUser | null> {
    return User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() }, // Ensure the token has not expired
    });
  }

  // Create a new user in the database
  async create(user: IUser): Promise<IUser> {
    return user.save();
  }

  // Save updates to an existing user
  async save(user: IUser): Promise<IUser> {
    return user.save();
  }

  // Find a user by their username (for login or other use cases)
  async findByUsername(username: string): Promise<IUser | null> {
    return User.findOne({ username });
  }
}

export default new UserRepository();
