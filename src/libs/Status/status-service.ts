import { getRepository } from "typeorm";
import { Status } from "../../Entities/status";

export class StatusService {
  public async getStatus(uid: string, date: string) {
    try {      
      // const statusRepo = getRepository(Status);

      // const status = await statusRepo.findOne();
      const status = "test";
      return status;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
