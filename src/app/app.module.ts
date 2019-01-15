import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PseudoEventComponent } from './pseudo-event/pseudo-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PseudoEventComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
