import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UserCrudModule } from './mailapp.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserCrudModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();