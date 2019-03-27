import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from './user';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  EventID: number;

  @Column()
  EventName: string;

  @Column()
  EventDesc: string;

  @Column()
  EventDate: string;

  @Column()
  EventTime: string;

  @ManyToOne(type => User, user => user.events)
  user: User;
}