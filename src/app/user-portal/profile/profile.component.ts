import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder,FormControl, NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/model/profile';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  constructor(private formBuilder:FormBuilder,private router:Router,private dataService: DataService){}

  profileDto = new Profile('',new Date,new Date);
  

  profileForm = this.formBuilder.group({
    joiningDate : new Date,
    birthday :  new Date
  });

  submit(){

    console.log(this.profileForm.value);
    this.profileDto.email = this.dataService.sessionEmail;
    this.profileDto.dateOfJoining = this.profileForm.get('joiningDate')?.value!;
    // this.profileDto.joiningDate = this.datePipe.transform(this.profileDto.joiningDate as Date,'yyyy-MM-dd');
    this.profileDto.birtDate = this.profileForm.get('birthday')?.value!;
    console.log(this.profileDto);
    this.dataService.addDetails(this.profileDto).subscribe(data =>console.log(data), error =>console.log(error));
    if(this.router.url =='/signUp/EmployeeBirthdayDeatils/profile'){
      this.router.navigateByUrl('signUp/EmployeeBirthdayDeatils');
    }
    else if (this.router.url =='/login/EmployeeBirthdayDeatils/profile'){
      this.router.navigateByUrl('login/EmployeeBirthdayDeatils');

    }

  }
  cancel(){

    console.log(this.router.url);
    if(this.router.url =='/signUp/EmployeeBirthdayDeatils/profile'){
      this.router.navigateByUrl('signUp/EmployeeBirthdayDeatils');
    }
    else if (this.router.url =='/login/EmployeeBirthdayDeatils/profile'){
      this.router.navigateByUrl('login/EmployeeBirthdayDeatils');

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
