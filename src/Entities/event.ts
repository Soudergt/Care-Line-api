import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  StatusID: number;

  @Column()
  EventName: string;

  @Column()
  EventDesc: string;

  @Column()
  EventDate: Date;
}