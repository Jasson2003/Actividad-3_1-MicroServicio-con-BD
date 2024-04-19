import { EstudianteModule } from './estudiante/estudiante.module';
import { EstudianteController } from './estudiante/estudiante.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    EstudianteModule, TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "unachbd",
      "entities": [join(__dirname, '**', '*.entity.{ts,js}')],
      "synchronize": true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
