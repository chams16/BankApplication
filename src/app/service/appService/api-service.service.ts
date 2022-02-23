import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../../Models/Contact";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  private contactUsUrl= "http://localhost:9000/api/contact/send"
  private token = localStorage.getItem("myToken")

  constructor(private http:HttpClient) { }

  contactUs(request:Contact){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+this.token)
    return this.http.post(this.contactUsUrl,request,{
      headers:__headers
    })
  }

  getUSer(email:string){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    return this.http.get("http://localhost:9000/api/person/find/natural/"+email,{
      headers:__headers
    })
  }
}
