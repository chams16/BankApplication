import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../../Models/Task";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private getEmployeeUrl= "http://localhost:9000/api/person/get/natural/all"
  private getEmployeebyEmailUrl= "http://localhost:9000/api/person/find/natural/"
  private token:string = <string>localStorage.getItem("myToken")




  constructor(private http:HttpClient) { }


  getEmployee(){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    return this.http.get<NaturalPersonDto[]>(this.getEmployeeUrl,{
      headers:__headers
    })
  }

  getEmployeeByEmail(email:string){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    console.log(email)
    return this.http.get<NaturalPersonDto>(this.getEmployeebyEmailUrl+email,{
      headers:__headers
    })
  }


  decodeToken():any{
    var decoded = jwt_decode(this.token);

    // @ts-ignore
    console.log("decode : ",decoded.sub)
    // @ts-ignore
    return decoded.sub.toString()
  }


}
