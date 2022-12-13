import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
  constructor( private router:Router, private dataService:DataService,private authService: AuthService){}
  
 usermodel = new User('','','','','');
 submitted = false;



 submit(){
  console.log(this.usermodel)
  this.submitted = true;
this.dataService.addUser(this.usermodel).subscribe(data =>console.log(data),error =>console.log(error));
if(this.submitted){

  this.authService.isSignedIn(this.submitted);
}

console.log(this.dataService.addUser(this.usermodel));

    this.router.navigateByUrl('signUp/EmployeeBirthdayDeatils');
 }

 ngOnDestry(){


 }

 getCurrentModel(){

  return JSON.stringify(this.usermodel);
 }

}
