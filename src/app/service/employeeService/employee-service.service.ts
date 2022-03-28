import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../../Models/Task";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private getEmployeeUrl= "http://localhost:9000/api/person/get/natural/all"
  private token = localStorage.getItem("myToken")

  constructor(private http:HttpClient) { }


  getEmployee(){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    return this.http.get<NaturalPersonDto[]>(this.getEmployeeUrl,{
      headers:__headers
    })
  }
}
