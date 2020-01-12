import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsString()
  repeat_period: string;

  @IsNumber()
  repeat_interval: number;

  @IsString()
  exception_period: string;

  @IsNumber()
  exception_number: number;

  @IsNumber()
  created_by: number;
}
