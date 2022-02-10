import { Injectable } from '@angular/core';
import {Transactionrequest} from "../../Models/transactionrequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl= "http://localhost:9000/transactions/apply"
  private token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFtc2VkZGluZTExMTlAZ21haWwuY29tIiwiZXhwIjoxNjQ0NDg4NDA4LCJpYXQiOjE2NDQ0NTI0MDh9.u2dvRmucsbFo_dkYWJrjQ30-ElnVSs_upDkBf95gwzA"

  constructor(private http:HttpClient) { }

  applyTransation(request:Transactionrequest){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+this.token)
    return this.http.post(this.transactionUrl,request,{
      headers:__headers
    })
  }
}
