import { Component } from '@angular/core';
import { LoginModel } from 'src/app/model/login-model';
import{FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

isSubmitted =false;
  // loginVal!: Login;

  password :string='';

  constructor(private fb: FormBuilder, private router:Router, private authService:AuthService, private dataService :DataService){}

   loginModel = new LoginModel('','');

  loginForm =this.fb.group({
    email : ['', Validators.required],
    password: ['',Validators.required],
  });

  get formControls(){
    return this.loginForm.controls;
  }
   email = this.loginForm.get('email')?.value!;
  login(){

    console.log(this.loginForm.value);
   
    this.loginModel.email= this.loginForm.get('email')?.value!;
    this.loginModel.password= this.loginForm.get('password')?.value!;
    this.isSubmitted = true;
    this.dataService.sessionEmail = this.loginModel.email;

    if(this.loginForm.invalid){
      return;
    }
      if(this.loginModel.email != "admin@clarivate.com"){
    this.authService.login(this.loginModel).subscribe((data) =>{
      if(data== 'Login Sucessful'){
        this.router.navigateByUrl('/login/EmployeeBirthdayDeatils');
        this.authService.loginCheck = true;
      }
      console.log(data)}, error => console.log(error));
      }
      else if(this.loginModel.email == "admin@clarivate.com"){
        if(this.authService.loginAdmin(this.loginModel.email,this.loginModel.password)){
        this.router.navigateByUrl('login/admin');
        this.authService.loginCheck = true;
        }
      }
  //    if(this.email ="admin@clarivate.com"){

  //   if(this.authService.login(email , password)){
    
  //     if(email =="admin@clarivate.com"){
  //       this.router.navigateByUrl('login/admin');

  //     }else{
  //   this.router.navigateByUrl('/login/EmployeeBirthdayDeatils');
  //   }
  // }
 
  
 
  // }
}

// loginForm = new FormGroup({
//   email : new FormControl(''),
//   password : new FormControl(''),
// });

  // submit(){
  //   console.log(this.loginModel)
  // }
  get userName(){
    return this.loginForm.get('email');
  }
  }
