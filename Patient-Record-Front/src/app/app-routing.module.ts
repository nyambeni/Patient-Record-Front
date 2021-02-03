import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from '../app/bookings/bookings.component';
import { ViewBookingsComponent } from '../app/view-bookings/view-bookings.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes: Routes = [
 {path: 'bookings', component: BookingsComponent },
 {path: 'viewBookings', component: ViewBookingsComponent },
 { path: 'patient-registration', component: PatientRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
