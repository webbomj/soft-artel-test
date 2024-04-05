import { CommonModule, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsError,
  selectIsLoading,
} from '../../store/login/login.selectors';
import { beginLogin } from '../../store/login/login.actions';
import { selectName } from '../../store/user/user.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    NgIf,
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private builder = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  isLoading = this.store.selectSignal(selectIsLoading);
  isError = this.store.selectSignal(selectIsError);
  error = this.store.selectSignal(selectError);
  userName = this.store.selectSignal(selectName);

  loginform = this.builder.group({
    login: this.builder.control(
      { value: '', disabled: this.isLoading() },
      Validators.required
    ),
    password: this.builder.control(
      { value: '', disabled: this.isLoading() },
      Validators.required
    ),
  });

  constructor() {
    effect(() => {
      if (this.userName()) {
        console.log(this.userName());
        this.router.parseUrl('/');
      }
    });
  }

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.loginform.valid) {
      const _obj = {
        login: this.loginform.value.login as string,
        password: this.loginform.value.password as string,
      };
      this.store.dispatch(beginLogin(_obj));
    }
  }
}
