import { getRepository } from "typeorm";
import { ClinicRating } from "../../Entities/clinic-rating";
import { CaretakerRating } from "../../Entities/caretaker-rating";

export class RatingService {
  public async getCaretakerRatings(id: number) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const ratings = await caretakerRatingRepo.createQueryBuilder("rating")
        .leftJoinAndSelect("rating.user", "user")
        .where("user.UserID = :id", { id: id })
        .getMany();   
  
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

  public async addCaretakerRating(rating: any) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const newRating = await caretakerRatingRepo.save(rating);    
  
      return newRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editCaretakerRating(rating: any) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const updatedRating = await caretakerRatingRepo.save(rating);    
  
      return updatedRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteCaretakerRating(rating: any) {
    try {
      const caretakerRatingRepo = getRepository(CaretakerRating);

      const removedRating = await caretakerRatingRepo.remove(rating);    
  
      return removedRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  
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

  public async addClinicRating(id: number, rating: any) {
    try {
      const clinicRatingRepo = getRepository(CaretakerRating);

      const newRating = await clinicRatingRepo.save(rating);    
  
      return newRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editClinicRating(rating: any) {
    try {
      const clinicRatingRepo = getRepository(CaretakerRating);

      const updatedRating = await clinicRatingRepo.save(rating);    
  
      return updatedRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteClinicRating(rating: any) {
    try {
      const clinicRatingRepo = getRepository(CaretakerRating);

      const removedRating = await clinicRatingRepo.remove(rating);    
  
      return removedRating;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
