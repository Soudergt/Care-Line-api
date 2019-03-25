import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

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

    
}