import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    semestre: number;

    @Column()
    grupo: string;

    @Column()
    edad: number;

    @Column({type: 'timestamp', default:()=> "CURRENT_TIMESTAMP"})
    fecha_registro: Date;

}