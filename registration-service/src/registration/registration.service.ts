// microservice1/src/registration/registration.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registration.entity';
import { amqpUrl } from '../config';

const amqp = require('amqplib/callback_api');

@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(Registration)
        private readonly registrationRepository: Repository<Registration>,
    ) {}

    async createRegistration(data: { name: string; email: string }): Promise<Registration> {
        const registration = this.registrationRepository.create(data);
        await this.registrationRepository.save(registration);

        amqp.connect(amqpUrl, function (error0, connection) {
            if (error0) {
                throw error0;
            }

            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }

                const queue = 'registration_queue';

                channel.assertQueue(queue, {
                    durable: false,
                });

                channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));

                console.log(' [x] Sent %s', JSON.stringify(data));
            });

            setTimeout(function () {
                connection.close();
            }, 500);
        });

        return registration;
    }
}
