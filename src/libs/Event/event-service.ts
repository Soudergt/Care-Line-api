import { getRepository } from "typeorm";
import { Event } from "../../Entities/event";
import { User } from './../../Entities/user';

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

  public async addEvent(user: User, event: any) {
    try {
      const eventRepo = getRepository(Event);

      event.user = user;

      const newEvent = await eventRepo.save(event);
  
      return newEvent;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async editEvent(event: any) {
    try {
      const eventRepo = getRepository(Event);

      const updatedEvent = await eventRepo.save(event);
  
      return updatedEvent;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public async deleteEvent(event: any) {
    try {
      const eventRepo = getRepository(Event);

      const removedEvent = await eventRepo.remove(event);
  
      return removedEvent;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
