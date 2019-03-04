import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

}