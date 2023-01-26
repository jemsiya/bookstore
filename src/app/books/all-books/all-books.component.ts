import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  allbooks:any=[];
 searchterm:any=[];
  acno:any;
  pswd:any;
  email:any;
  constructor(private api:ApiService,private cart:CartService,private router:Router){}

  //database

userDetails:any={
  'jemsiyapn@gmail.com':{acno:10000,username:'amal',password:1000,email:'jemsiyapn@gmail.com'},
  'jemsi@gmail.com':{acno:1000,username:'ajl',password:1001,email:'jemsi@gmail.com'},
  'jiyapn@gmail.com':{acno:1000,username:'athul',password:1002,email:'jiyapn@gmail.com'},
}



  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (data:any)=>{
       this.allbooks=data.pages
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
      }
      search(event:any){
        let searchkey=event.target.value
        this.api.searchkey.next(searchkey)
        }

        addtowishlist(page:any){
          this.api.addtowishlist(page).subscribe(

            (result:any)=>{
              alert(result.message)
            },
            (result:any)=>{
              alert(result.error.message)
            }
          )
        }
        addcart(page:any){
          this.cart.addcart(page)
        }

        emailChange(event:any){
          console.log(event);
          this.email=event.target.value;
          console.log(this.email);
        }
        pswdChange(event:any){
          this.pswd=event.target.value;
          console.log(this.pswd)
        }

      login(){

      // alert('login clicked')
      var email=this.email;
      var pswd=this.pswd;
      var userDetails=this.userDetails
      if(email in userDetails){
      if(pswd==userDetails[email]['password']){
        alert('login successful')
        this.router.navigateByUrl("")
      }
      else{
        alert('invalid password')
      }
      }
      else{
        alert('invalid userdetails')
      }
      }






      }

