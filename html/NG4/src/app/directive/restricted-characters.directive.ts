import { Directive, ElementRef, HostListener, Input} from '@angular/core';
import {isCombinedNodeFlagSet} from 'tslint';

@Directive({
  selector: '[appRestrictedCharacters]'
})
export class RestrictedCharactersDirective {
@Input()
pattern: any;
  constructor(private ele: ElementRef) {
    console.log(ele.nativeElement);
  }
  @HostListener("keypress", ["$event"])
  OnKeyPress(e) {
    console.log(e);
    const regExp = new RegExp(this.pattern);
    if (!regExp.test(e.key)) {
      e.preventDefault();
    }
  }
}
