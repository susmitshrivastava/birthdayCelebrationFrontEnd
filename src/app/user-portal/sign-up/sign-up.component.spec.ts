import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { UserPortalModule } from '../user-portal.module';

import { SignUpComponent } from './sign-up.component';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports:[SharedModuleModule,
        UserPortalModule,
         AppModule,
         ReactiveFormsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component intial state', () => {
    expect(component.submitted).toBeFalsy();
  });
  
  it('submitted should be true when signun', () => {
    component.submit();
    expect(component.submitted).toBeTruthy();
  });

});
