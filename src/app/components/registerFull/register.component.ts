import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
//import { UserResponse } from 'src/app/UserResponse';
import { UserInfo } from 'src/app/user-info';
import { UserDetails } from 'src/app/user-details';
import { UserEducation } from 'src/app/user-education';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, NgModel } from '@angular/forms';
import { UserEmployment } from 'src/app/user-employment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterFullComponent implements OnInit {

  //user : UserResponse= new UserResponse();
  message :any;
  user : UserInfo = new UserInfo();
  
  
  constructor(private service:UserService, private _router:Router) { }

  ngOnInit(): void {
    this.user.user_employment[0]=new UserEmployment();
    this.user.user_employment[1]=new UserEmployment();

  }
  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  public registerNow(){
  //   const userjson = {
  //     "user_name": this.user.name,
  //     "user_password": this.user.password,
  //     "user_details": {
  //         "first_name": this.user.fname,
  //         "last_name": this.user.lname,
  //         "email": this.user.email,
  //         "gender":this.user.gender
  //     },
  //     "user_education": {
  //                   "ssc_percentage": this.user.sscp,
  //                   "hsc_percentage": this.user.hscp,
  //                   "cgpa": this.user.cgpa,
  //                   "ssc_board_name": this.user.ssc,
  //                   "hsc_board_name": this.user.hsc,
  //                   "university_name": this.user.university
  //               },
  // }

    let resp=this.service.doRegistration(this.user);
    console.log(this.user)
    resp.subscribe(data=>{console.log("added")});
    //resp.subscribe(data=> {this.message=data});
    console.log(this.message)
    this._router.navigate(['/list']);

  }

}
