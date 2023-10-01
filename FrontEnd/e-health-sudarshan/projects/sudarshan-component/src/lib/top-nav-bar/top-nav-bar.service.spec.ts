import { TestBed } from '@angular/core/testing';

import { TopNavBarService } from './top-nav-bar.service';

describe('TopNavBarService', () => {
  let service: TopNavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopNavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
