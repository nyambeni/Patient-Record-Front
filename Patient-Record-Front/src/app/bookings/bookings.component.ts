import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  myForm: FormGroup;
  myMessage: string;

  constructor(private router: Router, private patientService: PatientService) {
    this.myForm = new FormGroup({
      patientId: new FormControl(null, Validators.required),
      //patientEmail: new FormControl(null, Validators.required),
      appDate: new FormControl(null, Validators.required)
     // patientPhone: new FormControl(null, Validators.required)
    })


  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  

  confirmBooking(){

    if(this.myForm.value.patientId == null || this.myForm.value.appDate == null){
      return this.myMessage = 'Cannot empty'

    }

    else{
      
    this.patientService.booking(this.myForm.value)
     .subscribe(
            data => {
              this.myMessage = 'Registered Successfully';
            },
            error => this.myMessage = 'Cannot Register'

          )
  }
    }


}
