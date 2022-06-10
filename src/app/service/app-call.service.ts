import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AppCallService {
   
  constructor(private http:HttpClient) {}

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  postData(data:any){
    return this.http.post("https://fakestoreapi.com/carts",data);
  }
}
