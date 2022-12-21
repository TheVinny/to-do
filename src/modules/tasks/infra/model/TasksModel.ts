import { ITag } from '@modules/tags/domain/interfaces/ITags';
import Tag from '@modules/tags/infra/model/TagModel';
import { ITasks } from '@modules/tasks/domain/interfaces/ITasks';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tasks')
class Tasks implements ITasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Tag, tags => tags.task)
  @JoinColumn({ name: 'tag_id' })
  tags: ITag[];

  @Column()
  completed: boolean;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tasks;
