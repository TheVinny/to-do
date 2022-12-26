import { ITag } from '@modules/tags/domain/interfaces/ITags';
import Tasks from '@modules/tasks/infra/model/TasksModel';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags')
class Tag implements ITag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  color: string;

  @OneToMany(() => Tasks, task => task.tags)
  task: Tasks;
}

export default Tag;
