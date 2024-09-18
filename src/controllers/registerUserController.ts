import { Request, Response } from 'express';
import UserService from '../services/userService';

class RegisterUserController {
  async handleRegisterUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, password, email } = req.body; // Ensure email is here
      console.log(req.body);
      const user = await UserService.register(username, password, email);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default new RegisterUserController();
