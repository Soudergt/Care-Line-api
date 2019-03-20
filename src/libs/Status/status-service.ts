import { getRepository } from "typeorm";
import { Status } from "../../Entities/status";

export class StatusService {
  public async getStatus(uid: string, date: string) {
    try {      
      const statusRepo = getRepository(Status);

      const status = await statusRepo.findOne();

      return status;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async addStatus(uid: string, status: any) {
    try {      
      const statusRepo = getRepository(Status);

      const newStatus = await statusRepo.save(status);
      
      return newStatus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editStatus(uid: string, status: any) {
    try {      
      const statusRepo = getRepository(Status);

      const updatedStatus = await statusRepo.save(status);
      
      return updatedStatus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteStatus(uid: string, status: any) {
    try {      
      const statusRepo = getRepository(Status);

      const removedStatus = await statusRepo.remove(status);
      
      return removedStatus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
