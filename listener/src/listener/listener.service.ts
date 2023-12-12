import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from '../../../registration-service/src/registration/registration.entity';

@Injectable()
export class ListenerService {
    constructor(
        @InjectRepository(Registration)
        private readonly registrationRepository: Repository<Registration>,
    ) {}

    async handleRegistration(data: any): Promise<void> {
        const registration = this.registrationRepository.create(data);
        await this.registrationRepository.save(registration);
    }
}
