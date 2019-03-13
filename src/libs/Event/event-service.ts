import { getRepository } from "typeorm";
import { Event } from "../../Entities/event";

export class EventService {
  public async getEvents(uid: number, date: string) {
    try {
      const eventRepo = getRepository(Event);

      const events = await eventRepo.findOne();    
  
      return events;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getEventsByWeek(uid: number, startDate: string) {
    try {
      const eventRepo = getRepository(Event);

      const events = await eventRepo.findOne();    
  
      return events;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async getEvent(id: number) {
    try {
      const eventRepo = getRepository(Event);

      const events = await eventRepo.findOne(id);
  
      return events;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
