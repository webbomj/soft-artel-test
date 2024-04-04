import { inject, Injectable } from '@angular/core';
import { User } from '../store/user/user.model';
import { HttpClient } from '@angular/common/http';

export const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);

  login(user: Pick<User, 'login' | 'password'>) {
    return this.http.get<User[]>(
      `${BASE_URL}/users?login=${user.login}&password=${user.password}`
    );
  }
}
