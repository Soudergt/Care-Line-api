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

  public async addFeedback(uid: number, feedback: any) {
    try {
      const feedbackRepo = getRepository(Feedback);

      const newFeedback = await feedbackRepo.save(feedback);    
  
      return newFeedback;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editFeedback(feedback: any) {
    try {
      const feedbackRepo = getRepository(Feedback);

      const updatedFeedback = await feedbackRepo.save(feedback);    
  
      return updatedFeedback;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

}