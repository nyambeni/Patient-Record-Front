import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingsComponent } from './bookings/bookings.component';
import { Routes, RouterModule } from '@angular/router';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientMedicalRecordComponent } from './patient-medical-record/patient-medical-record.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';


@NgModule({
  declarations: [
    AppComponent,

    BookingsComponent,
    ViewBookingsComponent,
<<<<<<< HEAD

=======
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04
    PatientRegistrationComponent,
    PatientDetailsComponent,
    ViewBookingsComponent,
    PatientMedicalRecordComponent,
    PatientLoginComponent,
    ViewAppointmentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
