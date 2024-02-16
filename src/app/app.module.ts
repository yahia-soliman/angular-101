import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



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
import { PreviewCardComponent } from './components/products/preview-card/preview-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    AboutComponent,
    CardComponent,
    PreviewCardComponent,
    CardListComponent,
    FooterComponent,
    LostComponent,
    HomeComponent,
    AddProductComponent,
    ProductFormComponent,
    EditProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
