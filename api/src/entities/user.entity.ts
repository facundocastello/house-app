import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ToDo } from './to-do.entity';
import { Task } from './tasks.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(type => ToDo, to_do => to_do.done_by)
  to_dos: ToDo[];
  
  @OneToMany(type => Task, task => task.created_by)
  tasks: Task[];

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
