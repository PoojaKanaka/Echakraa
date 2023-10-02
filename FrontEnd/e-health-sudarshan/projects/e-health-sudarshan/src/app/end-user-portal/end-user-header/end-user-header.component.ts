import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UTILITIES } from '../../utilities/utilities';

@Component({
  selector: 'app-end-user-header',
  templateUrl: './end-user-header.component.html',
  styleUrls: ['./end-user-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndUserHeaderComponent {
  constructor(private router: Router) {}

  navigateToAuth(): void {
    this.router.navigate(['.', UTILITIES.ROUTE_PATH.AUTH]);
  }
}
