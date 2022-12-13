import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBirthdayDetailsComponent } from './emp-birthday-details.component';

describe('EmpBirthdayDetailsComponent', () => {
  let component: EmpBirthdayDetailsComponent;
  let fixture: ComponentFixture<EmpBirthdayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBirthdayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBirthdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
