import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    MessageID: number;

    @Column("text")
    Message: string;

    @Column()
    Date: string;

    @ManyToOne(type => User, user => user.messages)
    user: User;

}