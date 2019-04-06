import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";

@Entity()
export class Needs {

    @PrimaryGeneratedColumn()
    NeedsID: number;

    @Column()
    Desc: string;

    @Column()
    Date: string;

    @Column()
    CreatedByID: string;

    @ManyToOne(type => User, user => user.needsList)
    user: User;

}