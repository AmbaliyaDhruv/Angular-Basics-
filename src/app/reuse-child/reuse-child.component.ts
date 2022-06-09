import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-child',
  templateUrl: './reuse-child.component.html',
  styleUrls: ['./reuse-child.component.css']
})
export class ReuseChildComponent implements OnInit {

  constructor() { }

  // initial value of data 
  @Input() data:{name:string,email:string}={name:"",email:""}

  ngOnInit(): void {
  }

}
