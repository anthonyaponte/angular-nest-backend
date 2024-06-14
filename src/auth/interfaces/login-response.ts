import { User } from '../entities/user.entity';
export interface LogingResponse {
  user: User;
  token: string;
}
