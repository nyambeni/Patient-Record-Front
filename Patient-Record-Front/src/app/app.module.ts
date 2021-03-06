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
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { PatientMedicalRecordComponent } from './patient-medical-record/patient-medical-record.component';


@NgModule({
  declarations: [
    AppComponent,

    BookingsComponent,
    ViewBookingsComponent

    PatientRegistrationComponent,
    PatientDetailsComponent,
    ViewBookingsComponent,
    PatientMedicalRecordComponent

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
