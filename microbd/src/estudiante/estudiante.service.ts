/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';
import { EstudianteDto } from './estudiante.interface';

@Injectable()
export class EstudianteService { 

    constructor(
        @InjectRepository(EstudianteEntity)
        private estudianteRepository: Repository <EstudianteEntity>,
    ){}

    async AddEstudiante(estudiante: EstudianteDto ): Promise<any> {
        let item = new EstudianteEntity();
        item.nombre= estudiante.nombre;
        item.apellido= estudiante.apellido;
        item.semestre= estudiante.semestre;
        item.grupo= estudiante.grupo;
        item.edad= estudiante.edad;
        const new_estudiante = await this.estudianteRepository.save(item);
        return new_estudiante;
        
    }

    async editarEstudiante(id: number, estudiante: EstudianteEntity): Promise<EstudianteEntity>{
        let toUpdate = await this.estudianteRepository.findOneBy({id});
        let update = Object.assign(toUpdate, estudiante);
        const estudiante_actualizado = await this.estudianteRepository.save(toUpdate)
        return estudiante_actualizado;
    }

    getAllEstudiantes(): Promise <EstudianteEntity[]>{
        return this.estudianteRepository.find();
    }

    getEstudianteByID(id: number): Promise<EstudianteEntity>{
        return this.estudianteRepository.findOneBy({id});
    }

    async eliminarEstudiante(id:number): Promise<void>{
        await this.estudianteRepository.delete(id);
    }




}
