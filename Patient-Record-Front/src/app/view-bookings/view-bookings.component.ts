import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Router } from '@angular/router';


export class ViewAppointmentsComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Bookings';

  ngOnInit(): void {
  }

  logout(){
	  this.router.navigate(['welcome-page']);
  }

  back(idNo: string){

  	// tslint:disable-next-line: indent
  	this.router.navigate(['patient-book-appointment', idNo]);
  }

}
