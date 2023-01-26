import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 searchkey = new BehaviorSubject('')

  constructor(private http:HttpClient) { }

   getProducts(){
    return this.http.get('http://localhost:3000/all-books')
   }
   //add
   addtowishlist(page:any){
    const body={
      id:page.id,
      title:page.title,
      cover_image:page.cover_image,
      price:page.price
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
   }

   getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
   }
  deletefromwish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+id)
  }

  getroducts(){
    return this.http.get('http://localhost:3000/bestsellers')
   }
}
