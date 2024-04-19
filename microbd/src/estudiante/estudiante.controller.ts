/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post,Put, Delete, Param, Body } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';
import { EstudianteDto } from './estudiante.interface';

@Controller('estudiantes')
export class EstudianteController {
    constructor (private readonly estudianteService: EstudianteService){}

    @Get()
    async getEstudiantes(): Promise<EstudianteEntity[]>{
        return await this.estudianteService.getAllEstudiantes();
    }

    @Post()
    async addEstudiante(@Body() estudiante: EstudianteDto): Promise<EstudianteEntity>{
        return await this.estudianteService.AddEstudiante(estudiante);
    }

    @Put(':id')
    async editarEstudiante(@Param() Params, @Body() estudiante: EstudianteEntity){
        return await this.estudianteService.editarEstudiante(Params.id, estudiante);
    }

    @Delete(':id')
    async deleteStudent(@Param() Param){
        return await this.estudianteService.eliminarEstudiante(Param.id);
    }




}
