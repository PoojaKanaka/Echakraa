import { FormControl } from '@angular/forms';

export interface ITopNavBarConfiguration {
  appName: string;
  hideMenuButton?: boolean;
  controlConfiguration?: {
    formControl: FormControl;
    controlList: { [key: string]: string }[];
    displayKey: string;
  };
}
