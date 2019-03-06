import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Clinic {

    @PrimaryGeneratedColumn()
    ClinicID: number;

    @Column()
    ClinicLongName: string;

    @Column()
    ClinicShortName: string;

    @Column()
    ClinicAddress: string;

    @Column("bigint")
    ClinicPhone: number;

    @Column()
    ClinicEmail: string;

    @Column("text")
    ClinicDescription: string;

    @Column("text")
    ClinicType: string;

    @Column("text")
    ClinicPhoto: string;
}