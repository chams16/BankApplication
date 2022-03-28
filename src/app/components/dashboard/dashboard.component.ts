import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../service/appService/api-service.service";
import jwt_decode from "jwt-decode";
import {TransactionService} from "../../service/transactionService/transaction.service";
import {Task} from "../../Models/Task";


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
  Transaction: any[] =[]
  TransactionHistoric=[
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"En Attente",
      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"Accepted",
      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"Accepted",
      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"Rejected",

      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"En Attente",

      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"En Attente",

      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"Rejected",

      "currency":"(USD)"
    },
    {
      "date":"16",
      "bankName":"HDFC Bank",
      "type":"Withdraw to Bank account",
      "amount":"562",
      "status":"En Attente",

      "currency":"(USD)"
    }
  ]

  constructor(private service:ApiServiceService,private transactionService:TransactionService) { }
  decoded=jwt_decode(<string>localStorage.getItem("myToken"))

  ngOnInit(): void {
      this.transactionService.getTasks().subscribe(
        res=>{
          console.log(res)
          console.log(this.Transaction);
          this.Transaction=res
          console.log(this.Transaction)
        },err=>{
          console.log(err)
    }
      )
  }


  reject(task:Task){
    this.transactionService.rejectTransaction(task).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit
        
      },err=>{
        console.log(err);
        
      }
    )
  }

  accept(task:Task){
    this.transactionService.acceptTransaction(task)
  }



}
