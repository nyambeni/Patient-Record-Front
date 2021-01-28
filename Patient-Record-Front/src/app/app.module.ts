import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { Routes, RouterModule } from '@angular/router';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    ViewBookingsComponent
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
