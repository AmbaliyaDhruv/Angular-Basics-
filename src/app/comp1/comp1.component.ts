import { Component, OnInit } from '@angular/core';
import { AppCallService } from '../service/app-call.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
