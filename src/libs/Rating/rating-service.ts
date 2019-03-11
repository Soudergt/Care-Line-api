import { getRepository } from "typeorm";
import { ClinicRating } from "../../Entities/clinic-rating";
import { CaretakerRating } from "../../Entities/caretaker-rating";

export class RatingService {
  public async getClinicRatings(id: number) {
    try {
      const clinicRatingRepo = getRepository(ClinicRating);

      const ratings = await clinicRatingRepo.find();    
  
      return ratings;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

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

  public async getCaretakerRatings(id: number) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const ratings = await caretakerRatingRepo.find();    
  
      return ratings;
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
