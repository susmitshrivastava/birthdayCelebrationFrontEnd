import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    LoginComponent,
    SignUpComponent
    
  ]
})
export class UserPortalModule { }
