import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitem:any=[];
  grand:Number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitem=data;

      }
    )
     this.grand=this.cart.gettotal()
  }

}

