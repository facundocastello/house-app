import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ToDo } from './to-do.entity';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  repeat_period: string;

  @Column()
  repeat_interval: number;

  @Column()
  exception_period: string;

  @Column()
  exception_number: number;
  
  @OneToMany(type => ToDo, to_do => to_do.task)
  to_dos: ToDo[];

  @ManyToOne(type => User, user => user.tasks)
  created_by: User;


  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
