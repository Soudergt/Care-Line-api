import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    StatusID: number;

    @Column()
    Title: string;

    @Column()
    Concerns: string;

    @Column()
    Activities: string;

    @Column()
    BehaviorMood: string;

    @Column("text")
    Comments: string;

    @Column()
    Date: String;

    @ManyToOne(type => User, user => user.statusList)
    user: User;

}