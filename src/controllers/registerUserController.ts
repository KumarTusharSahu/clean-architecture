import { Request, Response } from 'express';
import registerUserUseCase from '../usecases/registerUserUseCase';

class RegisterUserController {
  async handle(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await registerUserUseCase.execute(username, password);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

export default new RegisterUserController();
