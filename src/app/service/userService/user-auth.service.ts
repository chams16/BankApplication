import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {authenticationRequest} from "../../Models/authenticationRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private LoginUrl = "http://localhost:9000/api/person/login"

  constructor(private http:HttpClient) { }

  login(authrequest:authenticationRequest){
    return this.http.post<any>(this.LoginUrl,authrequest);
  }

  isLoggedIn(){
    let token = localStorage.getItem("myToken")
    if(token){
      return true;
    } else {
      return false;
    }
  }
}
