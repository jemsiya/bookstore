import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regster',
  templateUrl: './regster.component.html',
  styleUrls: ['./regster.component.css']
})
export class RegsterComponent implements OnInit {

email="";
pswd="";
username="";
  constructor(private router:Router) { }
  userDetails:any={
    'jemsiyapn@gmail.com':{acno:10000,username:'amal',password:1000,email:'jemsiyapn@gmail.com'},
    'jemsi@gmail.com':{acno:1000,username:'ajl',password:1001,email:'jemsi@gmail.com'},
    'jiyapn@gmail.com':{acno:1000,username:'athul',password:1002,email:'jiyapn@gmail.com'},
  }





  ngOnInit(): void {
  }
register(){
// alert('register clicked')
var email=this.email;
var pswd=this.pswd;
var username=this.username;

var userDetails=this.userDetails
if(email in userDetails){
  alert('userexist')
}
else{
  userDetails[email]={
    email:email,
    username:username,
    password:pswd,


  }
  console.log(userDetails);
  alert('registerd')
  this.router.navigateByUrl('');

}
}
}
