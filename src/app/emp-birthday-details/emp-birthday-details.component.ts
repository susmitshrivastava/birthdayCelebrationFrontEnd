import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EmployeeDetails } from '../employee-details';
import{MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DiaLogComponent } from '../dia-log/dia-log.component';
 import { User } from '../user';






@Component({
  selector: 'app-emp-birthday-details',
  templateUrl: './emp-birthday-details.component.html',
  styleUrls: ['./emp-birthday-details.component.css']
})
export class EmpBirthdayDetailsComponent implements OnInit {

empId :string= '';
BirthdayDate :string='';

  Empdata: EmployeeDetails[] =[];

  public dataSource = new MatTableDataSource<EmployeeDetails>();

  constructor(private authService: AuthService, private router: Router,private dataService :DataService, private dialog :MatDialog) { }
  ngOnInit(){
   this.getEmployeeInformation();
  }
  getEmployeeInformation() {
    this.dataService.getEmployeeData().subscribe((res)=>{
      console.log(res);
       this.dataSource.data = res;
    })
  }
  birthdayWish(){
    console.log("birthday wish submitted")
  }

 public displayedColumns =['SerialNumber','empId','firstName','lastName','email','BirthDate'];

  logout(){

    this.authService.logout();
    
    this.router.navigateByUrl('/login');
    
    }

    openDialog(email: string,BirthDate: Date){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.position={'top':'0','left':'0'};
      dialogConfig.width='500px';
      dialogConfig.height='500px';
      this.dataService.empIdForBirthdayMsg =email;
      this.dataService.birthdayDateForBirthdayMsg=BirthDate;

      this.dialog.open(DiaLogComponent, dialogConfig);
   
    
    }

    home(){
      console.log(this.router.url);
       if(this.router.url =='/login/EmployeeBirthdayDeatils'){
        this.router.navigateByUrl('login/EmployeeBirthdayDeatils');

       }
       else if (this.router.url =='/signUp/EmployeeBirthdayDeatils'){
        this.router.navigateByUrl('signUp/EmployeeBirthdayDeatils');

       }
    }

    profile(){
      console.log(this.router.url);
      if(this.router.url =='/signUp/EmployeeBirthdayDeatils'){
        this.router.navigateByUrl('signUp/EmployeeBirthdayDeatils/profile');
      }
      else if (this.router.url =='/login/EmployeeBirthdayDeatils'){
        this.router.navigateByUrl('login/EmployeeBirthdayDeatils/profile');

      }
    }

}
