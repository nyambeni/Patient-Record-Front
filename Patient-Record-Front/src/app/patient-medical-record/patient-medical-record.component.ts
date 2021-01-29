import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-medical-record',
  templateUrl: './patient-medical-record.component.html',
  styleUrls: ['./patient-medical-record.component.css']
})
export class PatientMedicalRecordComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Medical Record';

  ngOnInit(): void {
  }
  
  logout(){
	  this.router.navigate(['welcome-page']);
  }

}