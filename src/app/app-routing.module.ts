import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { LostComponent } from './pages/lost/lost.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: CardListComponent},
  { path: 'products/new', component: AddProductComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'products/edit/:id', component: EditProductComponent},
  { path: '**', component: LostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
