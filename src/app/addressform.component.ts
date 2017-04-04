import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SlideoutService } from './slideout.service';

@Component({
  selector: 'app-addressform',
  template: `
    <form class="well" #addressForm="ngForm">
      <div class="form-group">
        <label for="city">
          City
        </label>
        <input type="text" class="form-control" id="city" 
          name="city" 
          ngModel>  
      </div>
      <div class="form-group">
        <label for="state">
          State
        </label>
        <input type="text" class="form-control" id="state" 
          name="state" 
          ngModel>  
      </div>
    </form>
  `
})
export class AddressformComponent implements OnInit, OnDestroy {

  constructor(private slideoutService:SlideoutService) { }

  @ViewChild('addressForm')
  addressForm:NgForm;

  ngOnInit() {
    this.slideoutService.sendEvent.subscribe((data)=>{
      if(data === 'Address'){
        console.log(this.addressForm.value);
        this.addressForm.reset();
      }
    });
  }

  ngOnDestroy(){
    this.slideoutService.sendEvent.unsubscribe();
  }

}
