import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirst-project';
  num:number=0
  getName(){
    alert("Hello Dhruv welcome")
  }
  increase(){
    this.num++;
  }
  decrease(){
    if(this.num>0){
      this.num--;
    }
  }

  counter(value:string){
     if(value=="incre"){
       this.num++;
     }
      else{
        if(this.num>0){
          this.num--;
        }
      }
   }

   // property binding vs interpolation

   disable=true;

   handledisable(){
      this.disable=!this.disable;
   }

   // if else condition

   show=true;

  //  toggle
 
  status=false
  toggle(){
    this.status=!this.status;
  }

  // multiple condition

  colors="red"
  Changecolor(val:string){
    this.colors=val;
  }

  // switch case
  colors1="red"
  Changecolor1(val:string){
    this.colors1=val;
  }

  // For Loop in angular

  names=["Dhruv","Raj","Ravi","Rajesh"]

  details=[
    {firstname:"dhruv",email:"d@d.com",phone:"1234567890"},
    {firstname:"raj",email:"r@r.com",phone:"1234567890"},
    {firstname:"ravi",email:"ra@ra.com",phone:"1234567890"},
    {firstname:"rajesh",email:"je@je.com",phone:"1234567890"}
  ]

  //  nested loop

  nested=[
    {firstname:"dhruv",email:"a@a.com" , hobbies:["cricket","football","chess"]},
    {firstname:"raj",email:"r@r.com" , hobbies:["cricket","football","chess"]},
    {firstname:"ravi",email:"rv@rav" , hobbies:["cricket","football","chess"]},
  ]

  // style binding

  mycolor="red"
  colorToggle(){
    this.mycolor==="red"?this.mycolor="blue":this.mycolor="red";
  }
   
}
