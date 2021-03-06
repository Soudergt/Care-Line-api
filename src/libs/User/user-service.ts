import { Clinic } from './../../Entities/clinic';
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

  public async removeUsers() {
    try {
      const userRepo = getRepository(User);

      const users = await userRepo.clear();

      return users;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getPatients() {
    try {
      const userRepo = getRepository(User);

      const patients = await userRepo.find({ 
        where: { UserType: 'patient' },
        relations: ['events', 'clinic']
      });    
  
      return patients;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getCaretakers() {
    try {
      const userRepo = getRepository(User);

      const caretakers = await userRepo.find({ 
        where: { UserType: 'caretaker' },
        relations: ['clinic']
      });
  
      return caretakers;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getUser(uid: number) {
    try {
      const userRepo = getRepository(User);
      
      const user = await userRepo.findOne(uid, { relations: ["clinic"] });

      return user;
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  public async addUser(user: User) {
    try {
      const userRepo = getRepository(User);

      const newUser = await userRepo.save(user);

      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editUser(user: User) {
    try {
      const userRepo = getRepository(User);

      const editedUser = await userRepo.save(user);

      return editedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteUser(user: User) {
    try {
      const userRepo = getRepository(User);
      
      const removedUser = await userRepo.remove(user);

      return removedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getStatusCounts(uids: string) {
    try {
      let uidsArray = uids.split(',');      
      let statusCounts = [];
      const userRepo = getRepository(User);

      for(let i = 0; i < uidsArray.length; i++) {
        const user = await userRepo.findOne({
          where: {UserID: JSON.parse(uidsArray[i])},
          relations: ['statusList']
        });
        statusCounts.push({
          user: user
        });
      }
      console.log(statusCounts);

      return statusCounts;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
