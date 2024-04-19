import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('estudiante')
export class EstudianteEntity{

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