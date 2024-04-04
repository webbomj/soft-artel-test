export interface User {
  id: string;
  login: string;
  name: string;
  secondName: string;
  birthday: string;
  city: string;
  password: string;
}

export type UserAuthData = Pick<User, 'login' | 'password'>;
