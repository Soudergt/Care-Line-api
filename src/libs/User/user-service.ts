import { getRepository } from "typeorm";
import { User } from "../../Entities/user";

export class UserService {

  public async getUsers() {
    const userRepo = getRepository(User);

    const users = await userRepo.find();    

    return users;
  }

  public async getPatients() {
    const userRepo = getRepository(User);

    const patients = await userRepo.find({ where: { UserType: 'patient' }});    

    return patients;
  }

  public async getCaretakers() {
    const userRepo = getRepository(User);

    const caretakers = await userRepo.find({ where: { UserType: 'caretaker' }});

    return caretakers;
  }

  public async getUser(uid: number): Promise<any> {
    try {
      const userRepo = getRepository(User);
      
      const user = await userRepo.findOne(uid);

      return user;
    } catch(err) {
      console.log(err);
      
    }
  }

  public async addUser(user) {
    try {
      const userRepo = getRepository(User);

      const newUser = await userRepo.save(user);
      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editUser(user) {
    try {
      const userRepo = getRepository(User);

      const editedUser = await userRepo.save(user);

      return editedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteUser(uid: number) {
    
  }
}
