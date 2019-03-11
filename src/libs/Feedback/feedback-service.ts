import { getRepository } from "typeorm";
import { Feedback } from "../../Entities/feedback";

export class FeedbackService {
  public async getFeedback(uid: number) {
    try {
      const feedbackRepo = getRepository(Feedback);

      const feedback = await feedbackRepo.find();    
  
      return feedback;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

}