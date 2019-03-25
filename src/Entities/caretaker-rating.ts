import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from './user';

@Entity()
export class CaretakerRating {

    @PrimaryGeneratedColumn()
    CaretakerRatingID: number;

    @Column()
    FKCaretakerID: number;

    @Column()
    StarRating: number;

    @Column("text")
    TextRating: string;

    @Column()
    TimeUpdated: Date;

    @Column()
    FKRatedByUser: number;

    @ManyToOne(type => User, user => user.ratings)
    user: User;
}