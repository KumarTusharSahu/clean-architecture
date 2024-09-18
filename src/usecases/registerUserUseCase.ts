import bcrypt from 'bcryptjs';
import User from '../entities/user';
import userRepository from '../repositories/userRepository';
import { IUser } from '../entities/user';

class RegisterUserUseCase {
  async execute(username: string, password: string, email: string,): Promise<IUser> {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    return await userRepository.create(user);
  }
}

export default new RegisterUserUseCase();
