import { CaretakerRating } from './caretaker-rating';
import { Status } from './status';
import { Feedback } from './feedback';
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Clinic } from "./clinic";
import { Event } from "./event";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    UserID: number;

    @Column()
    UserType: string;

    @Column()
    UserEmail: string;

    @Column({
        nullable: true
    })
    Password: string;

    @Column({
        nullable: true
    })
    NamePrefix: string;

    @Column()
    NameFirst: string;

    @Column({
        nullable: true
    })
    NameMiddle: string;

    @Column()
    NameLast: string;

    @Column({
        nullable: true
    })
    NameSuffix: string;

    @Column({
        nullable: true
    })
    JobTitle: string;

    @Column({
        nullable: true
    })
    HomeAddress: string;

    @Column({
        type: "bigint",
        nullable: true
    })
    WorkPhone: number;

    @Column("bigint")
    MobilePhone: number;

    @Column({
        type: "bigint",
        nullable: true
    })
    HomePhone: number;

    @Column()
    DateOfBirth: Date;

    @Column()
    FeaturesEnabled: boolean;

    @Column({
        type: "text",
        nullable: true
    })
    UserPhoto: string;

    @Column({
        type: "int",
        nullable: true
    })
    HeightInches: number;

    @Column({
        type: "int",
        nullable: true
    })
    WeightPounds: number;

    @Column({
        nullable: true
    })
    BloodType: string;

    @Column({
        type: "text",
        nullable: true
    })
    AllergyInfo: string;

    @Column({
        type: "text",
        nullable: true
    })
    DietInfo: string;

    @ManyToMany(type => Clinic)
    @JoinTable()
    clinic: Clinic

    @OneToMany(type => Event, event => event.user)
    events: Event[];

    @OneToMany(type => Feedback, feedback => feedback.user)
    feedbackList: Feedback[];

    @OneToMany(type => Status, status => status.user)
    statusList: Feedback[];

    @OneToMany(type => CaretakerRating, rating => rating.user)
    ratings: CaretakerRating[];
}