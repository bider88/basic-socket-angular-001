import { UserClass } from '../classes/user.class';

export interface BodyResponse {
  ok: boolean;
  message: string;
  user?: UserClass;
  listUsers?: UserClass[];
}
