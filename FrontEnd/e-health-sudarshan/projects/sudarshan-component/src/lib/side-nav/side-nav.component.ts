import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { ISidenavConfiguration } from './side-nav.schema';
import { SideNavService } from './side-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'e-health-sudarshan-lib-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnDestroy {
  configuration: ISidenavConfiguration[];
  subs: Subscription;

  constructor(
    private sideNavService: SideNavService,
    private cdr: ChangeDetectorRef
  ) {
    this.subs = new Subscription();
    this.subs.add(
      this.sideNavService?.getConfiguration().subscribe((conf) => {
        this.configuration = conf;
        console.log('::: this.configuration', this.configuration);
        this.cdr?.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
