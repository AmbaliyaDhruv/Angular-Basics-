import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <p class="custom">
      student-list works!
    </p>
  `,
  styles: [
    `.custom {
      color: red;
    }`
  ]
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
