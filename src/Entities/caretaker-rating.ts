import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

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

}