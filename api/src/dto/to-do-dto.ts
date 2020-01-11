import { IsNotEmpty, IsBoolean } from 'class-validator';

export class ToDoDto {
  @IsNotEmpty()
  title: string
  
  @IsNotEmpty()
  description: string
  
  @IsBoolean()
  @IsNotEmpty()
  done: boolean
  
  @IsBoolean()
  @IsNotEmpty()
  expirated: boolean
  
  @IsNotEmpty()
  done_by: number
}
