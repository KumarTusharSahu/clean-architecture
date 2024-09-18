import { Request, Response } from 'express';
import userUseCases from '../usecases/userUseCases';

class UserController {
  async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await userUseCases.register(username, password);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

export default new UserController();
