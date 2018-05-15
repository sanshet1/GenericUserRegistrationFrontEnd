import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../userDTO.interface';
import { UserService } from '../userservice.service';
import { UserResponse } from '../UserResponse.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, HttpClient],
  styles: ['input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}']
})

export class RegisterComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  user: UserDTO = { firstName: '', middleName: '', lastName: '', email: '', userId: '', password: '', userAddressDTO: [{ type: '', address1: '', address2: '', street: '', city: '', pinCode:''}, { type: '', address1: '', address2: '', street: '', city: '', pinCode: '' }] };

  resposeMessage: string;
  isError: String;


  ngOnInit() {
  }

  userResponse: UserResponse;
  onFormSubmit(userForm: NgForm) {
    this.user.firstName = userForm.controls['firstName'].value;
    this.user.middleName = userForm.controls['middleName'].value;
    this.user.lastName = userForm.controls['lastName'].value;
    this.user.email = userForm.controls['email'].value;
    this.user.userId = userForm.controls['userID'].value;
    this.user.password = userForm.controls['password'].value;
    this.user.userAddressDTO[0].type = 'R';
    this.user.userAddressDTO[0].address1 = userForm.controls['addressLine1'].value;
    this.user.userAddressDTO[0].address2 = userForm.controls['addressLine2'].value;
    this.user.userAddressDTO[0].street = userForm.controls['street'].value;
    this.user.userAddressDTO[0].city = userForm.controls['city'].value;
    this.user.userAddressDTO[0].pinCode = userForm.controls['pinCode'].value;
    this.user.userAddressDTO[1].type = 'P';
    this.user.userAddressDTO[1].address1 = userForm.controls['perAddressLine1'].value;
    this.user.userAddressDTO[1].address2 = userForm.controls['perAddressLine2'].value;
    this.user.userAddressDTO[1].street = userForm.controls['perStreet'].value;
    this.user.userAddressDTO[1].city = userForm.controls['perCity'].value;
    this.user.userAddressDTO[1].pinCode = userForm.controls['perPinCode'].value;

    this.userService.createUser(this.user).subscribe(data => {
      this.resposeMessage = data.result;
      if (this.resposeMessage.search('successfully') == -1) {
        this.isError = 'Yes';
      }
      else {
        this.isError = 'No';
      }
    }

    );
    

  }

  cancelEdit() {
    this.router.navigate(['login']);

  }






}
