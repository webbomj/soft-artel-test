import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/user/user.selectors';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // TODO
  // ID, login, имя, фамилия
  // дата рождения (datepicker)
  // город (select, небольшой список городов на своё усмотрение)
  cities = ['kaliningrad', 'artemovsk', 'dnepropetrovsk'];

  router = inject(Router);
  store = inject(Store);

  id = input<string>();
  currentId = computed(() => Number(this.id()));

  user = this.store.selectSignal(selectUser);

  birthdateDate = computed(() => {
    if (this.user()) {
      return new Date(this.user()!.birthday);
    }
    return new Date();
  });
}
