import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../service/user-data.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data:any;
  constructor(private userData:UserDataService) { 
    this.data=this.userData.users()
    console.warn(userData.users())
  }

  ngOnInit(): void {
  }

}
