import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";

@Entity()
export class Needs {

    @PrimaryGeneratedColumn()
    NeedsID: number;

    @Column()
    desc: string;

    @ManyToOne(type => User, user => user.needsList)
    user: User;

}