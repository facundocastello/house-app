import { Module } from '@nestjs/common';
import { ToDosController } from './to-dos.controller';
import { ToDosService } from './to-dos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from 'src/entities/to-do.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  controllers: [ToDosController],
  providers: [ToDosService]
})
export class ToDosModule {}
