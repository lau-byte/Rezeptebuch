import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RezeptComponent } from './rezept/rezept.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezeptComponent,
    EinkaufslisteComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
