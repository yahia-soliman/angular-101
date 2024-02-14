import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/products/card/card.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { LostComponent } from './pages/lost/lost.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    AboutComponent,
    CardComponent,
    CardListComponent,
    FooterComponent,
    LostComponent,
    HomeComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
