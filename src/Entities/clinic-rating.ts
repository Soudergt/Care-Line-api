import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ClinicRating {

    @PrimaryGeneratedColumn()
    ClinicRatingID: number;

    @Column()
    FKClinicID: number;

    @Column()
    StarRating: number;

    @Column("text")
    TextRating: string;

    @Column()
    TimeUpdated: Date;

    @Column()
    FKRatedByUser: number;
}