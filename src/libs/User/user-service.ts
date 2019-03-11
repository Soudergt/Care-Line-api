import { getRepository } from "typeorm";
import { User } from "../../Entities/user";

export class UserService {

  public async getUsers() {
    const userRepo = getRepository(User);

    const users = await userRepo.find();    

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

  public async getUserV2(uid: number): Promise<any> {
    try {
      const userRepo = getRepository(User);
      
      const user = await userRepo.findOne(uid);

      return user;
    } catch(err) {
      console.log(err);
      
    }
  }

  public async addUser() {
    try {
      const userRepo = getRepository(User);

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
  
      const newUser = await userRepo.save(user);
      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editUser(data: any) {
    try {
      const userRepo = getRepository(User);
      
      const user = {
        UserID: 2,
        UserType: 'caretaker',
        UserEmail: 'twilliams@carelinetechnology.com',
        Password: 'password',
        NameFirst: 'Taylor',
        NameLast: 'Williams',
        MobilePhone: 6144997984,
        DateOfBirth: new Date(),
        FeaturesEnabled: true,
        ActivationDate: new Date(),
        UserPhoto: '/assets/images/people/caretakers/taylorwilliams.jpg'
      }

      const newUser = await userRepo.save(user);

      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteUser(data: any) {
    
  }
}
