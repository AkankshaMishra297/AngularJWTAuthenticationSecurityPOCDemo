import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {RootObject} from 'src/app/root-object';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users:RootObject;
  errorMessage : string;
  flag: boolean=true;
  
   constructor(private service:UserService, private _router:Router ) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users)
      },
      error => {
        this.errorMessage = `Error: ${error.error.message}`; 
        this.flag=false;  
             //this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        console.log(this.errorMessage)
      }
    );
  }


    
  
  public deleteUser(name:String){
    let resp= this.service.deleteUser(name);
    resp.subscribe(date=>{console.log("deleted")})
    console.log("aaaaaaaaaaaa")
    console.log(name)
    this._router.navigate(['/list']);
   }

   newUser(){
   
     this._router.navigate(['/registerFull']);
   
   }
   editUser(user){  
    this.service.setter(user);
    this._router.navigate(['/edit']);
  }

}

