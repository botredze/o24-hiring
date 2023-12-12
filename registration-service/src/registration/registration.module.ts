// microservice1/src/registration/registration.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { Registration } from './registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
