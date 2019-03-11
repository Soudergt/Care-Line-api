import { getRepository } from "typeorm";
import { User } from "../../Entities/user";

export class UserService {

  public async getUsers() {
    try {
      const userRepo = getRepository(User);

      const users = await userRepo.find();

      return users;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getPatients() {
    try {
      const userRepo = getRepository(User);

      const patients = await userRepo.find({ where: { UserType: 'patient' }});    
  
      return patients;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getCaretakers() {
    try {
      const userRepo = getRepository(User);

      const caretakers = await userRepo.find({ where: { UserType: 'caretaker' }});
  
      return caretakers;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getUser(uid: number) {
    try {
      const userRepo = getRepository(User);
      
      const user = await userRepo.findOne(uid);

      return user;
    } catch(err) {
      console.log(err);
      return err;
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
