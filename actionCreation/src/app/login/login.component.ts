import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { UserAuthenticationService } from '../user-authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserAuthenticationService],
  styles: ['input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) { }

  isloginSuccess: boolean;
  ngOnInit() {
  }

  login(loginForm: NgForm) {

     this.userAuthenticationService.login(loginForm.controls['userName'].value, loginForm.controls['password'].value).subscribe(data => {

      if (data) {
        this.router.navigate(['dashboard']);
      }
      else {
        this.isloginSuccess = true;
           }
    }, err => {
      console.log('Error',err);
    },
      () => {
        console.log('User login - now completed.');
      });



  }

}
