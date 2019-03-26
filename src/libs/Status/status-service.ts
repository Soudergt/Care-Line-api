import { getRepository } from "typeorm";
import { Status } from "../../Entities/status";

export class StatusService {
  public async getStatus(uid: number, date: string) {
    try {
      const statusRepo = getRepository(Status);

      const status = await statusRepo.find({
        where: {
          userUserID: uid,
          Date: date
        }
      });

      return status;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async addStatus(user: any, status: any) {
    try {
      const statusRepo = getRepository(Status);

      status.user = user;

      const newStatus = await statusRepo.save(status);

      console.log(newStatus);

      return newStatus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editStatus(status: any) {
    try {
      const statusRepo = getRepository(Status);

      const updatedStatus = await statusRepo.save(status);

      return updatedStatus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteStatus(status: any) {
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
