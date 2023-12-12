import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ListenerService } from './listener.service';

@Controller()
export class ListenerController {
    constructor(private readonly listenerService: ListenerService) {}

    @EventPattern('registration')
    async handleRegistration(data: any): Promise<void> {
        await this.listenerService.handleRegistration(data);
    }
}
