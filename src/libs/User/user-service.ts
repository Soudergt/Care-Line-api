import { getConnection, getRepository } from "typeorm";
import { User } from "../../Entities/user";

export class UserService {

  public async getUsers() {
    const userRepository = getConnection().getRepository(User);

    const users = await userRepository.find();

    return users;
  }

  public getUser(uid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = {
        id: 10,
        fn: 'Taylor',
        ln: 'Williams',
        clinic: 'Careline Clinic',
        img: "url('/assets/images/people/caretakers/taylorwilliams.jpg')"
      };
      resolve(user);
    });
  }

  public async getUserV2(uid: string): Promise<any> {
    const userRepository = getConnection().getRepository(User);
    let user = await userRepository.findOne(uid);
    return user;
  }

  public async addUser(data: any) {
    
  }

  public async editUser(data: any) {
    
  }

  public async deleteUser(data: any) {
    
  }
}
