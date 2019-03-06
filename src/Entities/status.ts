import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    StatusID: number;

    @Column()
    FKPatientID: number;

    @Column()
    HealthRating: number;

    @Column()
    BehaviorMood: string;

    @Column("text")
    DietPlan: string;

    @Column("text")
    PrescriptionInfo: string;

    @Column("text")
    TreatmentRecommendation: string;

    @Column("text")
    OtherComments: string;

    @Column()
    TimeUpdated: Date;

    @Column()
    FKUpdatedByCaretaker: number;

}