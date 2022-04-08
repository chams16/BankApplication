import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";
import {AccountDto} from "../../Models/accountDto";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private getAccountByIdUrl = "http://localhost:9000/api/account/get/person/"
  private token = localStorage.getItem("myToken")

  constructor(private http:HttpClient) { }

  getAccountNum(id: number | undefined){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log("start")
    return this.http.get<AccountDto[]>(this.getAccountByIdUrl+id,{
      headers:__headers
    })

  }
}
