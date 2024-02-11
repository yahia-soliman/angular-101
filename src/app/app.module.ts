import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './products/card/card.component';
import { CardListComponent } from './products/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    AboutComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
