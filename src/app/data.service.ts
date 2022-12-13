import { Injectable } from '@angular/core';
import { EmployeeDetails } from './employee-details';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminEmpDetails } from './admin-portal/admin-emp-details';
import { User } from './user';
import { __param } from 'tslib';
import { EmailValidator } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Profile } from './model/profile';
import { BirthDayMsg } from './model/birth-day-msg';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empIdForBirthdayMsg :string ='';
  birthdayDateForBirthdayMsg :Date= new Date;
  sessionEmail :string='';
  private _empData = 'http://localhost:8085/userservice/employee/birtdayInThisWeek';
  private _adminData ='http://localhost:8085/userservice/employee/home';
  private _adduser = 'http://localhost:8085/userservice/user/register';
  private _saveBirthdayMsg = 'http://localhost:8085/userservice/employee/birthDayWish';
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    body: {
      id: 1,
      name: 'test',
    },
    
}
  constructor(private httpClient : HttpClient) { }
  
  getEmployeeData(): Observable<EmployeeDetails[]>
{
  return this.httpClient.get<EmployeeDetails[]>(this._empData);
}

getAdminData(): Observable<AdminEmpDetails[]>{

return this.httpClient.get<AdminEmpDetails[]>(this._adminData);
}

addUser(User :User):Observable<object>{
  return this.httpClient.post(this._adduser,User);

}

saveBirthdayMsg(birthdayMsgModel: BirthDayMsg):Observable<String>{
return this.httpClient.post('http://localhost:8085/userservice/employee/birthDayWish', birthdayMsgModel, {responseType:'text'});
}

addDetails(Profile :Profile):Observable<object>{
  // const param = new HttpParams().set('email',email).set('dateOfJoining',joiningDate).set('birtdate',birthday)
  return this.httpClient.post('http://localhost:8085/userservice/user/addDetails',Profile, this.headers);
}

deleteDetails(email:string){
 let  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    body: {email
      
      
    },
    
}
return this.httpClient.post('http://localhost:8085/userservice/employee/delete',email);

}

}
