import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService : AuthService){}
  navCheck = false;

ngOnInit() {

  this.router.events.subscribe(event=>{
    if(event.constructor.name=="NavigationEnd" && this.authService.loginCheck == true){
      this.navCheck = this.authService.loginCheck;
    }
    else if(event.constructor.name == "NavigationEnd" && this.authService.signInCheck == true){
      this.navCheck = this.authService.signInCheck;
    }
  })
}
onSubmit() {  
  this.router.navigate(['/login'])  
}

}
