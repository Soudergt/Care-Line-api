import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    UserID: number;

    @Column()
    UserType: string;

    @Column()
    UserEmail: string;

    @Column()
    NamePrefix: string;

    @Column()
    NameFirst: string;

    @Column()
    NameMiddle: string;

    @Column()
    NameLast: string;

    @Column()
    NameSuffix: string;

    @Column()
    JobTitle: string;

    @Column()
    HomeAddress: string;

    @Column()
    WorkPhone: number;

    @Column()
    MobilePhone: number;

    @Column()
    HomePhone: number;

    @Column()
    DateOfBirth: Date;

    @Column()
    FeaturesEnabled: boolean;

    @Column()
    UserPhoto: string;

    @Column()
    HeightInches: number;

    @Column()
    WeightPounds: number;

    @Column()
    BloodType: string;

    @Column()
    AllergyInfo: string;

    @Column()
    DietInfo: string;

}