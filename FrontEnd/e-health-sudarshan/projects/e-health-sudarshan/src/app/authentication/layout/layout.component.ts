import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UTILITIES } from '../../utilities/utilities';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  ILLUSTRATION_URL = `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.LOGIN_SIGNUP_SVG}`;
}
