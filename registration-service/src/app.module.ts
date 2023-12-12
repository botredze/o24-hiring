import { Module } from '@nestjs/common';

import { RegistrationModule } from './registration/registration.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/nest-microservices',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RegistrationModule,
  ],
})
export class AppModule {}
