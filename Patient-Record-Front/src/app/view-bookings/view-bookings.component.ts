import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Bookings';

  ngOnInit(): void {
  }
  
  logout(){
	  this.router.navigate(['welcome-page']);
  }
  
  back(idNo: string){
	  
	this.router.navigate(['patient-book-appointment', idNo]);
  }

}