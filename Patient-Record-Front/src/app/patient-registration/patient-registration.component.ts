import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {


  bloodTypes: string[] = ['A+','A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  router: any;

  constructor() {}
  title = 'Patient Registration';



  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  logout(){
	  this.router.navigate(['welcome-page']);
  }

  // tslint:disable-next-line: typedef
  back(){
	  // tslint:disable-next-line: indent
	  this.router.navigate(['patient-login']);
  }

  // tslint:disable-next-line: typedef
  registerPatient(){

  }

}
