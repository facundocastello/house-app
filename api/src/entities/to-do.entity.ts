import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  to_do_id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  repeat_period: string;

  @Column()
  repeat_interval: number;

  @Column('boolean')
  done: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
