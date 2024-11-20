import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ReservationCalendarComponent } from './reservation-calendar/reservation-calendar.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'calendar', component: ReservationCalendarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
