import { RegsterComponent } from './../regster/regster.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllBooksComponent } from './all-books/all-books.component';

import { BooksComponent } from './books.component';
import { CartComponent } from './cart/cart.component';

import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component:  AllBooksComponent },
  { path: 'wish-list',component:WishListComponent },

  { path: 'cart', component: CartComponent },
  // { path: 'all-books', component: AllBooksComponent },
  { path: 'regster', component:RegsterComponent },
  { path: '**', component: PageNotFoundComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
