import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserPortalModule } from './user-portal/user-portal.module';
import { HttpClientModule } from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';

import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpBirthdayDetailsComponent } from './emp-birthday-details/emp-birthday-details.component';
import { DiaLogComponent } from './dia-log/dia-log.component';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    DiaLogComponent,
    EmpBirthdayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPortalModule,
    HttpClientModule,
    SharedModuleModule,
    MatTableModule,
    AdminPortalModule,
  
  
         BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DiaLogComponent]
})
export class AppModule { }
