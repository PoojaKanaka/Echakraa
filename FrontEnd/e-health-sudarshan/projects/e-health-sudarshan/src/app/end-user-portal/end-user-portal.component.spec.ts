import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserPortalComponent } from './end-user-portal.component';

describe('EndUserPortalComponent', () => {
  let component: EndUserPortalComponent;
  let fixture: ComponentFixture<EndUserPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserPortalComponent]
    });
    fixture = TestBed.createComponent(EndUserPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
