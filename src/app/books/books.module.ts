import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { WishListComponent } from './wish-list/wish-list.component';

import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    CartComponent,
    WishListComponent,

    FilterPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ]
})
export class BooksModule { }
