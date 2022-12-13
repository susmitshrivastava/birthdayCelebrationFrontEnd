import { Injectable } from '@angular/core';
import { LoginModel } from './model/login-model';
import { map, Observable, VirtualTimeScheduler } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  id :string ="susmit.shrivastava@clarivate.com";
  pwd :string ="Test@123";
  private _login ='http://localhost:8085/userservice/employee/login/';
  adminid :string ="admin@clarivate.com";
  adminpwd :string ="Test@123";
  loginSuces :boolean = false;
  loginCheck =false;
  signInCheck =false;
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  constructor(private httpClient :HttpClient) { }
  // public login(userInfo: Login){

  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
    
  //   }

//  login(email:string , password: string):Observable<object>{
  login(loginModel: LoginModel):Observable<String>{

//  return this.httpClient.post('http://localhost:8085/userservice/employee/login',loginModel, {observe :"response"}).pipe(map(data => {
//   console.log("Here will be return response code Ex :200", data.status)
//   return data.status
//         }));
return this.httpClient.post('http://localhost:8085/userservice/employee/login',loginModel,{responseType:'text'});

    // if(email == this.id && password ==this.pwd){
    //   this.loginSuces = true;
    //   this.loginCheck =true;
    //   return this.loginSuces;
    // }
    // else if (email== this.adminid && password == this.adminpwd){
    //   this.loginCheck =true;
    //   this.loginSuces= true;
    //    return this.loginSuces;
    // }
    // else{
    //   this.loginSuces =false;
    //   return this.loginSuces;
    // }
    
  }

  loginAdmin(email:string , password: string){
    if (email== this.adminid && password == this.adminpwd){
        this.loginCheck =true;
        this.loginSuces= true;
       
      }
      return this.loginSuces;
  }

    public isLoggedIn(){

      let status = false;      
     if (localStorage.getItem('ACCESS_TOKEN') == "true") {      
        status = true;      
     }
       else {      
        status = false;      
        }      
     return status;      
     }    
      
      
   
      
      
      public logout(){
      
      localStorage.removeItem('ACCESS_TOKEN');
      
      }

      public isSignedIn(isSubmitted :boolean){
        this.signInCheck = isSubmitted;

      }
}
