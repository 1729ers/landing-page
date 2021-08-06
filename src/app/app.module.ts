import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryCtaComponent } from './components/primary-cta/primary-cta.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureColumnComponent } from './components/feature-column/feature-column.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { QuoteCarouselComponent } from './components/quote-carousel/quote-carousel.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SlidingLogosComponent } from './components/sliding-logos/sliding-logos.component';
import { LogoComponent } from './components/logo/logo.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryCtaComponent,
    CtaButtonComponent,
    FeaturesComponent,
    FeatureColumnComponent,
    CategoriesComponent,
    CategoryButtonComponent,
    CategoryNavComponent,
    QuoteCarouselComponent,
    QuoteCardComponent,
    ProjectsComponent,
    SlidingLogosComponent,
    LogoComponent,
    FinalCtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
