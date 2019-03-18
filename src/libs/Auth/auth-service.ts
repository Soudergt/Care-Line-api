import { getRepository } from "typeorm";
import { User } from "../../Entities/user";

export class AuthService {

  public async login(username: string, password: string) {    
    const userRepo = getRepository(User);

    const user = await userRepo.findOne({ where: { UserEmail: username, Password: password } });
    
    if (user) {
      return user;
    } else {
      throw new Error;
    }
  }

  public async logout() {
    return true;
  }
}