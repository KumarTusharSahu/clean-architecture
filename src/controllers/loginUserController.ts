import { Request, Response } from 'express';
import loginUserUseCase from '../usecases/loginUserUseCase';

class LoginUserController {
  async handleUserLogin(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const { token } = await loginUserUseCase.execute(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

export default new LoginUserController();
