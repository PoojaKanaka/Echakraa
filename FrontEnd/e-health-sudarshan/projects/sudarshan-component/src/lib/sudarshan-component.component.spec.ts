import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudarshanComponentComponent } from './sudarshan-component.component';

describe('SudarshanComponentComponent', () => {
  let component: SudarshanComponentComponent;
  let fixture: ComponentFixture<SudarshanComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudarshanComponentComponent]
    });
    fixture = TestBed.createComponent(SudarshanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
