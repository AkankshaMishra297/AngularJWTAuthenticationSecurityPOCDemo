import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UserInfo } from 'src/app/user-info';
import { Router } from '@angular/router';
import { UserEmployment } from 'src/app/user-employment';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

   user : UserInfo = new UserInfo();
   message : any;

  constructor(private _userService:UserService,private _rotuer:Router) { }

  ngOnInit(): void {
    this.user=this._userService.getter();
    this.user.user_employment[0]=new UserEmployment();
    this.user.user_employment[1]=new UserEmployment();
  }
  processForm(){
    let resp=this._userService.editUser(this.user, this.user.user_name);
        //resp.subscribe(data=> {this.message=data});
        resp.subscribe(data=> {console.log("aaaaaa")});
    console.log("edited")
    this._rotuer.navigate(['/list']);

   
  }

}
