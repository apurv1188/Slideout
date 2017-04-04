import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Slideout App';
  hideContactSlideout:boolean = true;
  hideAddressSlideout:boolean = true; 
}
