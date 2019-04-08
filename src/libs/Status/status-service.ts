import { getRepository } from "typeorm";
import { Status } from "../../Entities/status";

export class StatusService {
  public async getStatus(uid: string, date: string) {
    try {
      const statusRepo = getRepository(Status);

      const status = await statusRepo.createQueryBuilder("status")
        .leftJoinAndSelect("status.user", "user")
        .where("user.UserID = :id", { id: uid })
        .andWhere("status.Date = :date", { date: date })
        .getMany();

      return status;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getStatusCounts(uids: string) {
    try {
      let uidsArray = uids.split(",");
      let statusCounts = [];
      const statusRepo = getRepository(Status);

      for (let i = 0; i < uidsArray.length; i++) {
        const count = await statusRepo.count({
          where: { userUserID: JSON.parse(uidsArray[i]) }
        });
        statusCounts.push({
          user: uidsArray[i],
          count: count
        });
      }

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
