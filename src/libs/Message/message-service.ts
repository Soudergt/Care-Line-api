import { getRepository } from "typeorm";
import { Message } from "../../Entities/message";

export class MessageService {
  public async getMessages(id: number) {
    try {
      const messageRepo = getRepository(Message);

      const messages = await messageRepo.find();    
  
      return messages;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async sendMessage(id: number, message: string) {
    try {
      const messageRepo = getRepository(Message);

      // const messages = await messageRepo.save();
  
      return {};
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
