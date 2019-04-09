import { Message } from './message';
import { CaretakerRating } from './caretaker-rating';
import { Status } from './status';
import { Feedback } from './feedback';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Clinic } from "./clinic";
import { Event } from "./event";
import { Needs } from './needs';

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

    @Column({
        type: "text",
        nullable: true
    })
    DietName: string;

    @Column({
        type: "text",
        nullable: true
    })
    Likes: string;

    @Column({
        type: "text",
        nullable: true
    })
    Dislikes: string;

    @Column({
        type: "text",
        nullable: true
    })
    Medications: string;

    @Column({
        type: "text",
        nullable: true
    })
    Exercise: string;

    @Column({
        type: "text",
        nullable: true
    })
    PhysicalRestrictions: string;

    @Column({
        type: "text",
        nullable: true
    })
    DietComments: string;

    @Column({
        type: "text",
        nullable: true
    })
    TreatmentComments: string;

    @ManyToOne(type => Clinic, clinic => clinic.users)
    clinic: Clinic;

    @OneToMany(type => Event, event => event.user)
    events: Event[];

    @OneToMany(type => Feedback, feedback => feedback.user)
    feedbackList: Feedback[];

    @OneToMany(type => Status, status => status.user)
    statusList: Status[];

    @OneToMany(type => Message, message => message.user)
    messages: Message[];

    @OneToMany(type => Needs, needs => needs.user)
    needsList: Needs[];

    @OneToMany(type => CaretakerRating, rating => rating.user)
    ratings: CaretakerRating[];
}