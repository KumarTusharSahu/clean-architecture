import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

class LoginUserUseCase {
  async execute(username: string, password: string): Promise<{ token: string }> {
    const user = await userRepository.findByUsername(username);
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
}

export default new LoginUserUseCase();
