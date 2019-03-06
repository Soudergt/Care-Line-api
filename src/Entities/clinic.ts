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

    @Column()
    ClinicPhone: number;

    @Column()
    ClinicEmail: string;

    @Column()
    ClinicDescription: string;

    @Column()
    ClinicType: string;

    @Column()
    ClinicPhoto: string;
}