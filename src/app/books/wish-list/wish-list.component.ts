import { CartService } from './../cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
 wishlist:any;
 emsg:any;
  constructor(private api:ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
this.api.getwishlist().subscribe(
  (data:any)=>{
    this.wishlist=data.pages
    if(this.wishlist.length==0){
      this.emsg='Empty wishlist'
    }
  },
  (data:any)=>{
    this.emsg=data.error.message
  }
)
  }

  deletewish(page:any){
    this.api.deletefromwish(page.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('wish-list')
        this.wishlist=result.wishlist
        if(this.wishlist.length==0){
          this.emsg='empty wishlist'
        }
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  addcart(page:any){
    this.cart.addcart(page)
    this.deletewish(page)
  }
}
