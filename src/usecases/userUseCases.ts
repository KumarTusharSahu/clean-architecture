import userService from '../services/userService';

class UserUseCases {
  async register(username: string, password: string) {
    return await userService.register(username, password);
  }
}

export default new UserUseCases();
