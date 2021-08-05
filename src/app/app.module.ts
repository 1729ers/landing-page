import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryCtaComponent } from './components/primary-cta/primary-cta.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureColumnComponent } from './components/feature-column/feature-column.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryCtaComponent,
    CtaButtonComponent,
    FeaturesComponent,
    FeatureColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
