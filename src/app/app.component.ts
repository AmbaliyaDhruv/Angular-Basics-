import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl,FormGroup, Validators} from "@angular/forms"

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

  // Angular basic form

  userData:any={}

  getData(data:NgForm){
    this.userData=data
  }

  // Todo

  listItems:any[]=[]

  AddNewTask(task:any){
    this.listItems.push({id:this.listItems.length+1 , task:task})

}
removeItem(id:number){
  this.listItems=this.listItems.filter(item=>item.id!=id)
}

// send data parent to child component

parentData=10;
  
changeValue(){
  this.parentData=Math.floor(Math.random()*10)
}

//  reusable child component

chilDataDetails=[
  {name:"dhruv" , email:"D@D.com"},
  {name:"raj" , email:"r@r.com"},
  {name:"rajesh" , email:"rj@rj.com"},
  {name:"meet" , email:"m@m.com"}

]


//  trnasfer data from child to parent
childtoparent=""
updateData(data:string){

  this.childtoparent=data
}

// Two way binding

name:any;

// template reference variable

getValue(data:HTMLInputElement){
  console.log(data.placeholder)
}

//  pipes in angular

tital="Angular Pipes"
today=new Date()
obj={
  name:"Dhruv",
  age:20
}

// custom pipe to convert INR to USD refer to inrtoUsd.pipe.ts file 

INR=100

// Reactive form
// FormGroup control whole form
// FormControl control individual control Or individual field

loginForm=new FormGroup({
  email:new FormControl(""),
  password:new FormControl("")
})

reactiveData={}

loginUser(){
  this.reactiveData=this.loginForm.value
}

// Reactive form Validation
// first import Validators from @angular/forms
// create a getter for the form control

loginForm1=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)])
})

reactiveData1={}

loginUser1(){
  this.reactiveData1=this.loginForm1.value
}

get email(){
  return this.loginForm1.get("email")
}

get password(){
  return this.loginForm1.get("password")

}

// custom directive refer reddirect folder

customdirectie="Hello"

}
