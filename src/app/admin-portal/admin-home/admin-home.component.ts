import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/auth.service';

import {MatTableDataSource} from "@angular/material/table";
import { AdminEmpDetails } from '../admin-emp-details';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit{
  public dataSource = new MatTableDataSource<AdminEmpDetails>();
  public displayedColumns =['SerialNumber','empId','firstName','lastName','email','BirthDate','JoiningDate','actions'];

  constructor(private authService: AuthService, private router: Router,private dataService :DataService) { }
  ngOnInit() {
    this.getEmployeeInfoAdmin();
   
  }
  getEmployeeInfoAdmin() {
    this.dataService.getAdminData().subscribe((res)=>{
      console.log(res);
      this.dataSource.data = res;

    })
  }
  logout(){

    this.authService.logout();
    
    this.router.navigateByUrl('/login');
    
    }

    delete(email: string){
      this.dataService.deleteDetails(email).subscribe(data =>console.log(data),error => console.log(error));
      

    }

}
