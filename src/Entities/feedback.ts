import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";

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

    @ManyToOne(type => User, user => user.feedbackList)
    user: User;

}