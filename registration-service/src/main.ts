import {NestFactory} from '@nestjs/core';
import {RegistrationModule} from './registration/registration.module';
import {Transport, MicroserviceOptions} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        RegistrationModule,
        {
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'cats_queue',
                queueOptions: {
                    durable: false
                },
            },
        }
    );

    app.listen();
}

bootstrap();
