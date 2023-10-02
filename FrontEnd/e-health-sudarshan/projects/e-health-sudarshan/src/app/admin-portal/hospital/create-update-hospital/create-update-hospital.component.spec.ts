import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateHospitalComponent } from './create-update-hospital.component';

describe('CreateUpdateHospitalComponent', () => {
  let component: CreateUpdateHospitalComponent;
  let fixture: ComponentFixture<CreateUpdateHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateHospitalComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
