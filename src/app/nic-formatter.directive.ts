import { Directive, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[nicFormatter]"
})
export class NicFormatter {
  @Input("nicFormatter") formValue: any;
  @HostListener("keyup", ["$event"])
  onKeyUp(e) {
    const arr = e.target.value.split("");
    let str = "";
    arr.forEach((value, index) => {
      if (index < 15) {
        if (value >= 0 && value <= 9) {
          str += value;
        }
        if (str && (index === 4 || index === 12)) {
          str += '-';
        }
      }
    });
    this.formValue.setValue(str);
  }
  constructor() {}
}
