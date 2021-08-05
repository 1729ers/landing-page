import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryCtaComponent } from './components/primary-cta/primary-cta.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryCtaComponent,
    CtaButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
