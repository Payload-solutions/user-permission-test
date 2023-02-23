import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appartment } from "./appartment.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @CreateDateColumn({ select: false })
    createdAt: Date;

    @CreateDateColumn({ select: false })
    modifiedAt: Date;

    @CreateDateColumn({ select: false })
    deletedAt: Date;

    @Column({ default: true })
    status: boolean;


    @Column({ length: 50 })
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Appartment, (appartment) => appartment.user)
    appartments: Appartment[];
}
