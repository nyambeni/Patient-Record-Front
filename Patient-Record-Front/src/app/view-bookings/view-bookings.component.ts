import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})

export class ViewAppointmentsComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Bookings';

  ngOnInit(): void {
  }
  
  /*logout(){
    const newLocal = 'welcome-page';
	  this.router.navigate([newLocal]);
  }
  
  back(idNo: string){
	  
	this.router.navigate(['patient-book-appointment', idNo]);
  }*/

}