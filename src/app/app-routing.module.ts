import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-portal/admin-home/admin-home.component';
import { AuthGuardService } from './auth.guard.service';
import { EmpBirthdayDetailsComponent } from './emp-birthday-details/emp-birthday-details.component';
import { LoginComponent } from './user-portal/login/login.component';
import { ProfileComponent } from './user-portal/profile/profile.component';
import { SignUpComponent } from './user-portal/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login/EmployeeBirthdayDeatils',component:EmpBirthdayDetailsComponent},
  {path:'signUp/EmployeeBirthdayDeatils', component:EmpBirthdayDetailsComponent},
  {path : 'login/admin',component:AdminHomeComponent},
  {path:'login/EmployeeBirthdayDeatils/profile',component:ProfileComponent},
  {path: 'signUp/EmployeeBirthdayDeatils/profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
