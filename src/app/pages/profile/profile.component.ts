import { Component, computed, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserState } from '../../store/user/user.selectors';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  // TODO
  // ID, login, имя, фамилия
  // дата рождения (datepicker)
  // город (select, небольшой список городов на своё усмотрение)
  cities = ['kaliningrad', 'artemovsk', 'dnepropetrovsk'];

  route = inject(ActivatedRoute);
  router = inject(Router);
  store = inject(Store);

  id = input<string>();
  user = this.store.selectSignal(selectUserState);
  birthdateDate = computed(() => new Date(this.user().birthday));

  ngOnInit(): void {
    if (this.id() !== String(this.user().id)) {
      this.router.navigate(['']);
    }
  }
}
