import { Request, Response } from 'express';
import UserService from '../../../services/userService';

class RegisterUserController {
  async handleRegisterUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, password, email } = req.body;
      console.log(req.body);

      const user = await UserService.register(username, password, email);
      res.status(201).json(user);
    } catch (error: any) {
      // Check if the error is due to an existing user
      if (error.message === 'User with this email already exists') {
        res.status(409).json({ message: 'User already exists' }); // 409 Conflict status
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  }
}

export default new RegisterUserController();
