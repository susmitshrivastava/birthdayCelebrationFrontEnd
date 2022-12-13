import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import{FormBuilder,Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { BirthDayMsg } from '../model/birth-day-msg';
@Component({
  selector: 'app-dia-log',
  templateUrl: './dia-log.component.html',
  styleUrls: ['./dia-log.component.css']
})
export class DiaLogComponent  {

 birthdayMsgModel = new BirthDayMsg('','',new Date, '');
  // message:string;

  constructor(private fb : FormBuilder,private dataService :DataService,
    public dialogRef : MatDialogRef<DiaLogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){

   
  }



form = this.fb.group({
  message :''
})
  save(){

    this.dialogRef.close(this.form.value);
    console.log(this.form.value)
    let message = this.form.value as string;
    this.birthdayMsgModel.email= this.dataService.empIdForBirthdayMsg;
    this.birthdayMsgModel.senderEmail= this.dataService.sessionEmail;
    this.birthdayMsgModel.bdayMessage = this.form.get('message')?.value!;
    this.birthdayMsgModel.birthDate = this.dataService.birthdayDateForBirthdayMsg;
    console.log(this.birthdayMsgModel);
    this.dataService.saveBirthdayMsg(this.birthdayMsgModel).subscribe(data =>console.log(data), error => console.log(error));
  }

  close(){
    this.dialogRef.close();
  }
}
