import { Directive, ElementRef } from '@angular/core';
declare var jQuery: any;
@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  constructor(private ele: ElementRef) {
    jQuery(this.ele.nativeElement).datepicker();
  }

}
