import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from '../app/bookings/bookings.component';
import { ViewBookingsComponent } from '../app/view-bookings/view-bookings.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes: Routes = [
 {path: 'bookings', component: BookingsComponent },
 {path: 'viewBookings', component: ViewBookingsComponent },
<<<<<<< HEAD
 { path: 'patient-registration', component: PatientRegistrationComponent}
];
=======
 { path: 'patient-r egistration', component: PatientRegistrationComponent}
];
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
