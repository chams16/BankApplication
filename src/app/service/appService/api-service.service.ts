import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../../Models/Contact";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  private contactUsUrl= "http://localhost:9000/api/contact/send"
  private token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFtc2VkZGluZTExMTlAZ21haWwuY29tIiwiZXhwIjoxNjQ0NTYyMDk5LCJpYXQiOjE2NDQ1MjYwOTl9.ULI33RFxDZLoWALlk9FQjPNE46sQDmb0ACZ4yJGA5dI"


  constructor(private http:HttpClient) { }

  contactUs(request:Contact){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+this.token)
    return this.http.post(this.contactUsUrl,request,{
      headers:__headers
    })
  }
}
