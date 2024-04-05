import { LoginState } from '../login/login.model';
import { TicketState } from '../tickets/tickets.model';
import { UserState } from '../user/user.model';

export interface AppStore {
  login: LoginState;
  user: UserState;
  tickets: TicketState;
}
