import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ToDo } from './to-do.entity';

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

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
