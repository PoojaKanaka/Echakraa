import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class MobileNumberComponent implements OnInit, OnDestroy {
  @Input({ required: true }) controlname: string;

  parentContainer = inject(ControlContainer);

  get parentFG() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFG.addControl(
      this.controlname,
      new FormControl(null, [Validators.required])
    );
  }

  ngOnDestroy(): void {
    this.parentFG.removeControl(this.controlname);
  }
}
