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

    @Column("bigint")
    WorkPhone: number;

    @Column("bigint")
    MobilePhone: number;

    @Column("bigint")
    HomePhone: number;

    @Column()
    DateOfBirth: Date;

    @Column()
    FeaturesEnabled: boolean;

    @Column("text")
    UserPhoto: string;

    @Column()
    HeightInches: number;

    @Column()
    WeightPounds: number;

    @Column()
    BloodType: string;

    @Column("text")
    AllergyInfo: string;

    @Column("text")
    DietInfo: string;

}