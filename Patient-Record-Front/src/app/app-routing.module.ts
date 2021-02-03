import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from '../app/bookings/bookings.component';
import { ViewBookingsComponent } from '../app/view-bookings/view-bookings.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

const routes: Routes = [
 {path: 'bookings', component: BookingsComponent },
 {path: 'viewBookings', component: ViewBookingsComponent },
 { path: 'patient-r egistration', component: PatientRegistrationComponent},
 {path: 'adminHome', component: AdminHomeComponent },
 {path: 'patientAppointment', component: PatientAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
