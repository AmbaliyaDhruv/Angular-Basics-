import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('name'));
  }

}
