import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaLogComponent } from './dia-log.component';

describe('DiaLogComponent', () => {
  let component: DiaLogComponent;
  let fixture: ComponentFixture<DiaLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
