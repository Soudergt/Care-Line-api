import { getRepository } from "typeorm";
import { ClinicRating } from "../../Entities/clinic-rating";
import { CaretakerRating } from "../../Entities/caretaker-rating";

export class RatingService {
  public async getClinicRating(id: number) {
    try {
      const clinicRatingRepo = getRepository(ClinicRating);

      const rating = await clinicRatingRepo.findOne(id);    
  
      return rating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getCaretakerRating(id: number) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const rating = await caretakerRatingRepo.findOne(id);    
  
      return rating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
