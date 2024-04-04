export interface User {
  id: number;
  login: string;
  name: string;
  secondName: string;
  birthday: string;
  city: string;
  password: string;
}

export type UserAuthData = Pick<User, 'login' | 'password'>;

export type UserState = Omit<User, 'id'> & {
  id: number | null;
};
