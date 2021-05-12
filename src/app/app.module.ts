import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NicFormatter } from './nic-formatter.directive';
import { IbanFormatter } from './iban-formatter.directive';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ AppComponent, HelloComponent, NicFormatter, IbanFormatter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
