import { Clinic } from './clinic';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

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

    @ManyToOne(type => Clinic, clinic => clinic.ratings)
    clinic: Clinic;
}