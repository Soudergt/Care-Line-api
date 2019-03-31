import { ClinicRating } from './clinic-rating';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { User } from './user';

@Entity()
export class Clinic {

    @PrimaryGeneratedColumn()
    ClinicID: number;

    @Column()
    ClinicLongName: string;

    @Column({
        nullable: true
    })
    ClinicShortName: string;

    @Column()
    ClinicAddress: string;

    @Column("bigint")
    ClinicPhone: number;

    @Column()
    ClinicEmail: string;

    @Column({
        type: "text",
        nullable: true
    })
    ClinicDescription: string;

    @Column({
        type: "text",
        nullable: true
    })
    ClinicType: string;

    @Column({
        type: "text",
        nullable: true
    })
    ClinicPhoto: string;

    @OneToMany(type => ClinicRating, rating => rating.clinic)
    ratings: ClinicRating[];

    @OneToMany(type => User, user => user.clinic)
    users: User[];
}