import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    MessageID: number;

    @Column("text")
    MessageText: string;

}