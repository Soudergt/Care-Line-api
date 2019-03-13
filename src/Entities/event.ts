import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  StatusID: number;



    
}