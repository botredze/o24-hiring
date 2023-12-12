// microservice1/src/registration/registration.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import {Registration} from "./registration.entity";

@Controller('registration')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {}

    @Post('/register')
    async register(@Body() data: { name: string; email: string }): Promise<Registration> {
        return this.registrationService.createRegistration(data);
    }
}
