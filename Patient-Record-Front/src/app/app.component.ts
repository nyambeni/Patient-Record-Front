import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patient-Record-Front';
  router: any;

  constructor(_router: Router, private flashMessage: FlashMessagesService){}

  showFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'alert-success', timeout: 2000 });

  }
}
