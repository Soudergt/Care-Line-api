import { getRepository } from "typeorm";
import { Message } from "../../Entities/message";

export class MessageService {
  public async getMessages(id: number) {
    try {
      const messageRepo = getRepository(Message);

      const messages = await messageRepo.find({
        relations: ['user']
      });
  
      return messages;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async sendMessage(message: any) {
    try {
      const messageRepo = getRepository(Message);

      const newMessage = await messageRepo.save(message);
  
      return newMessage;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
