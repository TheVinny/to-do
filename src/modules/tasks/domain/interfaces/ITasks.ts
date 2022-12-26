import { ITag } from '@modules/tags/domain/interfaces/ITags';

export interface ITasks {
  title: string;
  description: string;
  completed: boolean;
  tags: ITag[];
  created_at: Date;
}
