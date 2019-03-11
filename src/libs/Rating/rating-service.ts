import { getRepository } from "typeorm";
import { Clinic } from "../../Entities/clinic";

export class RatingService {
  public async getRating(id: number) {
    try {
      const clinicRepo = getRepository(Clinic);

      const clinic = await clinicRepo.findOne(id);    
  
      return clinic;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
