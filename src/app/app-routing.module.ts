import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { LostComponent } from './pages/lost/lost.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: CardListComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: '**', component: LostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
