// listener-service/src/listener/listener.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListenerController } from './listener.controller';
import { ListenerService } from './listener.service';
import { Registration } from '../../../registration-service/src/registration/registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  controllers: [ListenerController],
  providers: [ListenerService],
})
export class ListenerModule {}
