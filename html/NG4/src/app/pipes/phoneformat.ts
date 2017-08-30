import {Pipe, PipeTransform} from '@angular/core';
// pipe is a decorator
// PipeTransform is an interface
@Pipe({
  name: "formatphone"
})
export class PhoneFormat implements PipeTransform {
  transform(input, criteria?: any) {
    console.log(input);
    if  (input && input.length === 10) {
      if (criteria === "IN") {
        return this.IndianPhone(input);
      }
      if (criteria === "US") {
        return this.USPhone(input);
      }
    }
    return input;
  }
   private IndianPhone(phone: String): String {
   let prefix = "+91-";
   let output = prefix+phone.substring(0,5)+"-"+phone.substring(5, 10);
   return output;
  }
  private USPhone(phone) {
    let prefix = "+1-";
    let output = prefix + phone.substring(0, 3) + "-" + phone.substring(3, 6) + "-" + phone.substring(6, 10);
    return output;
  }
}
