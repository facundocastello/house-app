import { IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class ToDoDto {
  @IsNotEmpty()
  title: string
  
  @IsNotEmpty()
  description: string
  
  @IsBoolean()
  done?: boolean = false
  
  @IsBoolean()
  expirated?: boolean = false
  
  @IsNumber()
  done_by?: number = null

  @IsNotEmpty()
  task: number
}
