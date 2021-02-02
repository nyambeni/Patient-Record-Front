import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
	
 	

  constructor(private patientService: PatientService, private router: Router) { }
  title = 'Patient Records';
 
  getPatientDetails(loginForm: NgForm){	
	  this.router.navigate(['patient-details', loginForm.value.idNumber]);  
  }
  
  logout(){
	  this.router.navigate(['welcome-page']);
  }
  registerPatient(){
	  this.router.navigate(['patient-registration']);
  }

}
