import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SlideoutComponent } from './slideout.component';
import { ContactformComponent } from './contactform.component';
import { AddressformComponent } from './addressform.component';
import { SlideoutService } from './slideout.service';

@NgModule({
  declarations: [
    AppComponent,
    SlideoutComponent,
    ContactformComponent,
    AddressformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SlideoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
