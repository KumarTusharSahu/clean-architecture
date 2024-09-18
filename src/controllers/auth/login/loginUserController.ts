import { Request, Response } from 'express';
import loginUserUseCase from '../../../usecases/auth//login/loginUserUseCase';

class LoginUserController {
  async handleUserLogin(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const { token } = await loginUserUseCase.execute(username, password);
      res.status(200).json({ token });
    } catch (error: any) {
      // Send specific error message back to the client
      res.status(401).json({ message: error.message }); // 401 Unauthorized for invalid login
    }
  }
}

export default new LoginUserController();
