import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName="Dhruv"
  getUserName(name:string,count:number){
    alert("Hello "+name +" welcome to your "+count+"th visit")
  }
  dataInput(value:string){
    console.warn(value)
    
  }
  displayName:string=""
  getValue(value:string){
      this.displayName=value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
