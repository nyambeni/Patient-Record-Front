import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patient-Record-Front';
  router: any;

  constructor(router: Router){}


}
