import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../service/user-data.service";
import {AppCallService} from "../service/app-call.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data:any;
  serverData:any;

  constructor(private userData:UserDataService,private appCall:AppCallService) { 
    this.data=this.userData.users()

    appCall.getData().subscribe(data=>{
      this.serverData=data
    })
  }

  ngOnInit(): void {
  }

}
