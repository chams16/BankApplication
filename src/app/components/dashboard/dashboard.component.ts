import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../service/appService/api-service.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  balance=250
  profilUser="chams "
  accountNumber=2358964895236256
  Imatricule=589632
  currencyType=0
TransactionHistoric=[
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",
    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",
    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",

    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",

    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",

    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",

    "currency":"(USD)"
  },
  {
    "date":"16",
    "bankName":"HDFC Bank",
    "type":"Withdraw to Bank account",
    "amount":"562",
    "status":"In Progress",

    "currency":"(USD)"
  }
]

  constructor(private service:ApiServiceService) { }
  decoded=jwt_decode(<string>localStorage.getItem("myToken"))

  ngOnInit(): void {
    // @ts-ignore
    this.service.getUSer(this.decoded.sub).subscribe(
      res=>{

      }
    )
  }

}
