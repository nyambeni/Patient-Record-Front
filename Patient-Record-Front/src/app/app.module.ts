import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { PatientMedicalRecordComponent } from './patient-medical-record/patient-medical-record.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientDetailsComponent,
    ViewBookingsComponent,
    PatientMedicalRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
