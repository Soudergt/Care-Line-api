import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Clinic {

    @PrimaryGeneratedColumn()
    id: number;

}