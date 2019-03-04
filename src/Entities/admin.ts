import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id: number;

}