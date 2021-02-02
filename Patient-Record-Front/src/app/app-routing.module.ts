import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from '../app/bookings/bookings.component';
import { ViewBookingsComponent } from '../app/view-bookings/view-bookings.component';


const routes: Routes = [
 {path: 'bookings', component: BookingsComponent },
 {path: 'viewBookings', component: ViewBookingsComponent },
 { path: 'patient-r egistration', component: PatientRegistrationComponent}
];
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }