import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { EstudianteEntity } from './estudiante.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EstudianteEntity])],
    controllers: [EstudianteController],
    providers: [EstudianteService],
})
export class EstudianteModule {}
