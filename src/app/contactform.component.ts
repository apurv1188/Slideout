import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SlideoutService } from './slideout.service';

@Component({
  selector: 'app-contactform',
  template: `
    <form class="well" #contactForm="ngForm">
      <div class="form-group">
        <label for="name">
          Name
        </label>
        <input type="text" class="form-control" id="name" 
          ngModel
          name="name">  
      </div>
      <div class="form-group">
        <label for="surname">
          Surname
        </label>
        <input type="text" class="form-control" id="surname" 
          ngModel 
          name="surname">  
      </div>
      <div class="form-group">
        <label for="message">
          Message
        </label>
        <textarea class="form-control" id="message" 
          ngModel 
          name="message"></textarea>
      </div>

    </form>
  `
})
export class ContactformComponent implements OnInit,OnDestroy {

 @ViewChild('contactForm')
 contactForm:NgForm;

  constructor(private slideoutService:SlideoutService) { }

  ngOnInit() {
    this.slideoutService.sendEvent.subscribe((data)=>{
      if(data === 'Contact'){
        console.log(this.contactForm.value);
        this.contactForm.reset();
      }
    })
  }

  ngOnDestroy(){
    this.slideoutService.sendEvent.unsubscribe();
  }
}
