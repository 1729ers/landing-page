import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryCtaComponent } from './components/primary-cta/primary-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryCtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
