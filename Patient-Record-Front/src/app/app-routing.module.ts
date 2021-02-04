import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from '../app/bookings/bookings.component';
import { ViewBookingsComponent } from '../app/view-bookings/view-bookings.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { PatientMedicalRecordComponent} from './patient-medical-record/patient-medical-record.component';


const routes: Routes = [
 {path: 'bookings', component: BookingsComponent },
 {path: 'viewBookings', component: ViewBookingsComponent },
 { path: 'patient-registration', component: PatientRegistrationComponent},
 { path: 'patient-details',component: PatientDetailsComponent},
 {path: 'patient-medical-record',component: PatientMedicalRecordComponent},
 { path: 'view-appointment',component: ViewAppointmentsComponent },
 { path:'patient-login',component: PatientLoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }