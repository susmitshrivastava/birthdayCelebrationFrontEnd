import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { UserPortalModule } from '../user-portal.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testbedService:AuthService;
  const authService = jasmine.createSpyObj<AuthService>('AuthService',['login']);

  // function updateForm(email , password) {
  //   component.loginForm.controls['email'].setValue(email);
  //   component.loginForm.controls['password'].setValue(password);
  // }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers :[{provide :AuthService,useValue :authService}],
      imports:[SharedModuleModule,
      UserPortalModule,
       AppModule,
       ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testbedService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('component initial state', () => {
    expect(component.isSubmitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
 
  });
  it('submitted should be true when login()', () => {
    component.login();
    expect(component.isSubmitted).toBeTruthy();
  
  });


});
