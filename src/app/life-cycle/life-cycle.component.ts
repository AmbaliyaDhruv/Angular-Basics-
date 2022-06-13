import { Component, OnInit,OnChanges ,Input, SimpleChange, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{

  // first constructor is called when component is created look at the console
  constructor() { 
    console.warn("constructor called");
  }

  @Input() propLife:any="hooks"

 
  // ngOnInit is called when component is created look at the console
  ngOnInit(): void {
    console.warn("ngOnInit called");
  }

  // ngOnchanges is called when @input is changed look at the console
   ngOnChanges(changes: SimpleChanges): void {
     console.warn("ngOnChanges called");
      console.log(changes);
   }

  //  performs actions in this time DoCheck is called
   ngDoCheck():void{
      console.warn("ngDoCheck called");
   }

  //  ngAfterContentInit is called when content of the component is initialized
   ngAfterContentInit(): void {
   console.warn("ngAfterContentInit called");
   }

  //  ngAfterContentChecked is called when content of the component is checked or changed
  ngAfterContentChecked(): void {
    console.warn("ngAfterContentChecked called");
  }

  //  ngAfterViewInit is called when view of the component is initialized
  ngAfterViewInit(): void {
  console.warn("ngAfterViewInit called");
  }

  //  ngAfterViewChecked is called when view of the component is checked or changed
  ngAfterViewChecked():void{
    console.warn("ngAfterViewChecked called");
  }

  // ngOnDestroy is called when component is destroyed

  ngOnDestroy(): void {
    console.warn("ngOnDestroy called");
  }


}
