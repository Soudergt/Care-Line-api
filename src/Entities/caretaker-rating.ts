import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from './user';

@Entity()
export class CaretakerRating {

    @PrimaryGeneratedColumn()
    CaretakerRatingID: number;

    @Column()
    Rating: number;

    @Column("text")
    Title: string;

    @Column("text")
    Desc: string;

    @Column()
    Date: string;

    @Column()
    FKRatedByUser: number;

    @ManyToOne(type => User, user => user.ratings)
    user: User;
}