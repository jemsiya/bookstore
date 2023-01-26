import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[];
  cartlist=new BehaviorSubject([])
  constructor() { }




  //addcart
  addcart(page:any){
    this.cartarray.push(page);
    this.cartlist.next(this.cartarray)
    console.log( this.cartlist);


    let total=this.gettotal();
    console.log(total);
  }

//   login(acno:any,pswd:any){
//     let userDetails = this.userDetails;
//     if(acno in userDetails){
//
//      if(pswd==userDetails[acno]['password']){
//       return true;
//      }
//      else{
//        return false;
//      }
//     }
//     else{
//      return false;
//     }
//  }
gettotal(){
var grandsum=0;
this.cartarray.map((item:any)=>{
  grandsum+=item.price
})

return grandsum;
}
removecart(page:any){
  this.cartarray.map((item:any,index:any)=>{

  })
}
}
