import { getRepository } from "typeorm";
import { Event } from "../../Entities/event";
import { User } from './../../Entities/user';
import * as moment from 'moment';

export class EventService {
  public async getEvents(uid: number, date: string) {
    try {
      const eventRepo = getRepository(Event);      

      const events = await eventRepo.find({
        where: {
          userUserID: uid,
          EventDate: date
        },
        relations: ['user']
      });
  
      return events;
    } catch (err) {
      console.log(err);
      return err;
    } 
  }

  public async getEventsByWeek(uid: number, startDate: string) {
    try {
      const eventRepo = getRepository(Event);      

      let dates = [];
      for(let i = 0; i < 7; i++) {
        let newDate = moment(startDate).add(i, 'day');
        dates.push(newDate.toISOString());
      }
      
      const events = await eventRepo.find({
        where: [
          { EventDate: dates[0], userUserID: uid },
          { EventDate: dates[1], userUserID: uid },
          { EventDate: dates[2], userUserID: uid },
          { EventDate: dates[3], userUserID: uid },
          { EventDate: dates[4], userUserID: uid },
          { EventDate: dates[5], userUserID: uid },
          { EventDate: dates[6], userUserID: uid }
        ],
        relations: ['user']
      });
  
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
