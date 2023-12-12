// listener-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { ListenerModule } from './listener/listener.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { amqpUrl } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ListenerModule, {
    transport: Transport.RMQ,
    options: {
      urls: [amqpUrl],
      queue: 'registration_queue',
    },
  });

  app.listen();
}
bootstrap();
