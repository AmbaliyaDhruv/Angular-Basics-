import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedele]'
})
export class RedeleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
  
   }

}
