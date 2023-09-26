import { TestBed } from '@angular/core/testing';

import { SudarshanComponentService } from './sudarshan-component.service';

describe('SudarshanComponentService', () => {
  let service: SudarshanComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudarshanComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
