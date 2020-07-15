import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { RootObject } from './root-object';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data:any = []
  user : UserInfo = new UserInfo();

  private baseUrl: String = 'http://localhost:8085';
  private userUrl = 'http://localhost:8080/api/test/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public getUsers() :Observable<RootObject>{
    return this.http.get<RootObject>("http://localhost:8080/api/test/getUsers");
}

  setter(user:UserInfo){
    this.user=user;      
  }

 getter(){
   return this.user;
 }

 editUser(user,uname){
   console.log(user)
   console.log(uname)

  return this.http.put("http://localhost:8080/api/test/editUser/"+uname,JSON.stringify(user),this.httpOptions)
    
}

doRegistration(user){

    return this.http.post("http://localhost:8080/api/test/addUser",JSON.stringify(user),this.httpOptions)
      
}


 
public deleteUser(uname){

    console.log("bbbbb")
    console.log(uname)
    return this.http.delete("http://localhost:8080/api/test/hardDelete/"+uname);
  }
}
