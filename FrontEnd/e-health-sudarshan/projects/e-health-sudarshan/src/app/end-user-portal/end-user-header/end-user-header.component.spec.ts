import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserHeaderComponent } from './end-user-header.component';

describe('EndUserHeaderComponent', () => {
  let component: EndUserHeaderComponent;
  let fixture: ComponentFixture<EndUserHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserHeaderComponent]
    });
    fixture = TestBed.createComponent(EndUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
