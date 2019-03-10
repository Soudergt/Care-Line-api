import { getManager } from "typeorm";
import { User } from "../../Entities/user";

export class UserService {

  public async getUsers() {
    const entityManager = getManager();

    const users = await entityManager.find(User);    

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
    try {
      const entityManager = getManager();
      const user = await entityManager.find(User);

      return user;
    } catch(err) {
      console.log(err);
      
    }
  }

  public async addUser() {
    const entityManager = getManager();

    const user = {
      UserType: 'caretaker',
      UserEmail: 'twilliams@carelinetechnology.com',
      Password: 'password',
      NameFirst: 'Taylor',
      NameLast: 'Williams',
      MobilePhone: 6144997984,
      DateOfBirth: new Date(),
      FeaturesEnabled: true,
      ActivationDate: new Date()
    }
    // const newUser = entityManager.create(User);
    const newUser = await entityManager.create(User, user);
    return newUser;
  }

  public async editUser(data: any) {
    
  }

  public async deleteUser(data: any) {
    
  }
}
