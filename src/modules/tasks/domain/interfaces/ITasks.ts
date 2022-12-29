import { ITag } from '@modules/tags/domain/interfaces/ITags';
import { IUser } from '@modules/users/domain/interfaces/IUser';

export interface ITasks {
  title: string;
  description: string;
  completed: boolean;
  priority: number;
  tags: ITag[];
  created_at: Date;
  user: IUser;
}
