import { Component, OnInit, Input } from '@angular/core';
//import { PatientService } from '../patient.service';
//import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  idNo: any;
  patient: any;
  title = 'Patient Information';
<<<<<<< HEAD


  constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService) {
=======
  router: any;
 
  
  /*constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService) {
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04
    this.idNo = 0;

  }*/

  ngOnInit(){
<<<<<<< HEAD

	  this.idNo = this.route.snapshot.params['idNo'];
=======
	  
	 /* this.idNo = this.route.snapshot.params['idNo'];
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04
	  console.log(this.idNo);
	  this.patientService.getPatient(this.idNo).subscribe( (data) => {
		  console.log(data.message);

		  if(data.error){
			  alert(data.message);
			  console.log(data);
			  this.router.navigate(['patient-login']);
		  }else{
			   this.patient = data.data;
		  }
	  }, error => console.log(error));*/
  }

  logout(){
	  this.router.navigate(['welcome-page']);
  }

  back(){
	  this.router.navigate(['patient-login']);
  }

  bookAppointment(idNo: string){

	this.router.navigate(['patient-book-appointment', idNo]);
  }

}
