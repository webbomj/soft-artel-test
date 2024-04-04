import { LoginState } from '../login/login.model';
import { User as UserState } from '../user/user.model';

export interface AppStore {
  login: LoginState;
  user: UserState;
}
