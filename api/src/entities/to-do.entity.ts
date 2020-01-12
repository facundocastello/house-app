import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { Task } from './tasks.entity';

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  to_do_id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({type: 'boolean', default: false})
  done: boolean;

  @Column({type: 'boolean', default: false})
  expirated: boolean;

  @ManyToOne(type => User, user => user.to_dos)
  done_by: User;

  @ManyToOne(type => Task, task => task.to_dos)
  task: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
