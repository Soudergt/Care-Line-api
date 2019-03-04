import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    id: number;

}