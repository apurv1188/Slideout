import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SlideoutService } from './slideout.service';
@Component({
  selector: 'app-slideout',
  template: `
    <h2>{{title}}
      <button type="button" class="close" 
        aria-label="close" (click)="emitClose()">
        <span>&times;</span>
      </button>
    </h2> 
   <ng-content></ng-content>
   <button type="button" class="btn btn-primary" 
   (click)="emitSend()">Send</button>
  `,
  styles: []
})
export class SlideoutComponent{

  constructor(private slideoutService:SlideoutService) { }
  
  @Input()
  title:string="Slideout"

  @Output()
  closeEvent:EventEmitter<any> = new EventEmitter();

  emitClose(){
    this.closeEvent.emit();
  }
  
  emitSend(){
    this.slideoutService.emitSendEvent(this.title);
    this.emitClose();
  }

}
