import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Caretaker {

    @PrimaryGeneratedColumn()
    id: number;

}