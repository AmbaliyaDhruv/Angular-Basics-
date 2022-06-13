import { Component, OnInit } from '@angular/core';
import { AppCallService } from '../service/app-call.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _changeSer:AppCallService) {
    this._changeSer.UserName.subscribe(unname=>{
      this.userName=unname;
    })
   }

  ngOnInit(): void {
  }

  userName:any;

  userChange(value:string){
    this._changeSer.UserName.next(value)
  }
}
