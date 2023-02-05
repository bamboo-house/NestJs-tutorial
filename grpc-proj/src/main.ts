import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:5000',
        package: 'sample',
        protoPath: join(__dirname, 'proto/sample.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
