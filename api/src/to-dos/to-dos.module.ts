import { Module } from '@nestjs/common';
import { ToDosController } from './to-dos.controller';
import { ToDosService } from './to-dos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from '../entities/to-do.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo, User])],
  controllers: [ToDosController],
  providers: [ToDosService]
})
export class ToDosModule {}
