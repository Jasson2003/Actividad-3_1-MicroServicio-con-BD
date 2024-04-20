import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './mailDTO/usuario.dto';
import { User } from './entity/mailapp.entity';

@Injectable()
export class UserCrudService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ){}

  async create(user : UserDto) : Promise<User | null >{
    const newUser = await this.userRepository.create(user);
    const saveUser = await this.userRepository.save(newUser);
    return saveUser;
  }

  async findOne(id: number) : Promise<User | null> {
    return await this.userRepository.findOne({
      where: { id: id }
    });
  }

  async update(user : UserDto) : Promise<User | null> {
    const userData = {
      nombre: user.nombre,
      apellido: user.apellido,
      semestre: user.semestre,
      grupo: user.grupo,
      edad: user.edad 

    }
    const id = user.id;
    
    await this.userRepository.update(id, userData);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
