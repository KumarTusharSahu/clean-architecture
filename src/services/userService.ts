import bcrypt from 'bcryptjs';
import User from '../entities/user';  // Import the User model
import userRepository from '../repositories/userRepository';
import { IUser } from '../entities/user';

class UserService {
  async register(username: string, password: string): Promise<IUser> {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User instance
    const user = new User({
      username,
      password: hashedPassword,
    });

    // Save the user instance using userRepository
    return await userRepository.create(user);
  }
}

export default new UserService();
