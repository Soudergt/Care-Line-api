import { getRepository } from "typeorm";
import { Status } from "../../Entities/status";

export class StatusService {
  public async getStatus() {
    try {
      const statusRepo = getRepository(Status);

      const status = await statusRepo.findOne();    
  
      return status;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
