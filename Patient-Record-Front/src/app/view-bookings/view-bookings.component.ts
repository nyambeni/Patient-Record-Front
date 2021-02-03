import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})

<<<<<<< HEAD
import { Router } from '@angular/router';


=======
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04
export class ViewAppointmentsComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Bookings';

  ngOnInit(): void {
  }
<<<<<<< HEAD

  logout(){
	  this.router.navigate(['welcome-page']);
=======
  
  /*logout(){
    const newLocal = 'welcome-page';
	  this.router.navigate([newLocal]);
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04
  }

  back(idNo: string){
<<<<<<< HEAD

  	// tslint:disable-next-line: indent
  	this.router.navigate(['patient-book-appointment', idNo]);
  }
=======
	  
	this.router.navigate(['patient-book-appointment', idNo]);
  }*/
>>>>>>> ff38d472a1800d2b6dfd7e616bdd6e28290b0b04

}
