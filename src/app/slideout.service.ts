import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SlideoutService{
    sendEvent:EventEmitter<any> = new EventEmitter();
    emitSendEvent(value){
        this.sendEvent.emit(value);
    }
}