import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childto-parent',
  templateUrl: './childto-parent.component.html',
  styleUrls: ['./childto-parent.component.css']
})
export class ChildtoParentComponent implements OnInit {

  constructor() { }
  
  @Output() updateDataEvent=new EventEmitter<string>();

  ngOnInit(): void {
  }

}
