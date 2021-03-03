import { FormControl } from "@angular/forms";

export namespace DemoItem {
  export interface Button {
    text: string;
    color: string;
  }

  export interface Input {
    formControl: FormControl;
    color: string;
  }
}