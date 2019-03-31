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

  public async getStatusCounts(uids: string) {
    try {
      let uidsArray = uids.split(',');      
      let statusCounts = [];
      const statusRepo = getRepository(Status);

      for(let i = 0; i < uidsArray.length; i++) {
        const count = await statusRepo.count({ 
          where: {userUserID: JSON.parse(uidsArray[i])}
        });
        statusCounts.push({
          user: uidsArray[i],
          count: count
        });
      }
      console.log(statusCounts);

      return statusCounts;
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
