import bcrypt from 'bcryptjs';
import userRepository from '../repositories/userRepository';
import User,{ IUser } from '../entities/user';

class UserService {
  async register(username: string, password: string, email: string): Promise<IUser> {
    const existingUser = await userRepository.findByEmail(email); // Check if email already exists
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
     console.log(email)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    console.log(`New user: ${user}`);

    return await userRepository.create(user);
  }
}

export default new UserService();
