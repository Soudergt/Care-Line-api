import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    FeedbackID: number;

    @Column()
    FKPatientID: number;

    @Column("text")
    GeneralFeedback: string;

    @Column("text")
    TreatmentOptions: string;

    @Column("text")
    CareAdvise: string;

    @Column()
    TimeUpdated: Date;

    @Column()
    FKUpdatedByUser: number;

}