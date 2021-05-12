import { Directive, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[ibanFormatter]"
})
export class IbanFormatter {
  @Input("ibanFormatter") formValue: any;
  @HostListener("keyup", ["$event"])
  onKeyUp(e) {
    const arr = e.target.value.split("");
    let str = "";
    arr.forEach(value => {
      if (value >= 0 && value <= 9) {
        str += value;
      }
      if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
        str += value;
      }
      if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
        str += value;
      }
    });
    this.formValue.setValue(str.toLocaleUpperCase());
  }
  constructor() {}
}
