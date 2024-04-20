import { Module } from '@nestjs/common';
import { UserCrudController } from './mailapp.controller';
import { UserCrudService } from './mailapp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/mailapp.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'unachbd',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserCrudController],
  providers: [UserCrudService],
})
export class UserCrudModule {}
