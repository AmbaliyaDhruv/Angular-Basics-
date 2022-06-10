import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:"John",age:20},
      {name:"Jane",age:21},
      {name:"Jack",age:22},
      {name:"Jill",age:23}
    ]
  }

  // this service is used in the about and user components please refer
}
