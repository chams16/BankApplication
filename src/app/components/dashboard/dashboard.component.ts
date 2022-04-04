import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../service/appService/api-service.service";
import jwt_decode from "jwt-decode";
import {TransactionService} from "../../service/transactionService/transaction.service";
import {Task} from "../../Models/Task";
import {EmployeeServiceService} from "../../service/employeeService/employee-service.service";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";
import {AccountServiceService} from "../../service/AccountService/account-service.service";
import {AccountDto} from "../../Models/accountDto";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser: NaturalPersonDto | undefined
  balance: number | undefined
  profilUser: string | undefined
  accountNumber=''
  Imatricule: string | undefined
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
  email=''
  id:number | undefined

  constructor(private service:ApiServiceService,private transactionService:TransactionService
              ,private employeeService:EmployeeServiceService
              ,private accountservice:AccountServiceService) { }


  ngOnInit(): void {
        this.getEmployee()
        this.decodeToken()
        this.getEmployeebyEmail()
  }

  getEmployee(){
    this.transactionService.getTasks().subscribe(
      res=>{
        //console.log(res)
        //console.log(this.Transaction);
        this.Transaction=res
        //console.log(this.Transaction)
      },err=>{
        console.log(err)
      }
    )
  }

  decodeToken(){
    this.email=this.employeeService.decodeToken()
  }

  reject(task:Task){
    this.transactionService.rejectTransaction(task).subscribe(
      res=>{
        console.log(res)


      },err=>{
        console.log(err);

      }
    )
  }

  accept(task:Task){
    this.transactionService.acceptTransaction(task)
  }

  getAccountNum(){
    this.accountservice.getAccountNum(this.id).subscribe(
      res=>{
        console.log(res[0].accountNum)
        // @ts-ignore
        this.accountNumber = res[0].accountNum
        this.balance = res[0].balancy
      },err=>{
        console.log(err)
      }
    )
  }

  getEmployeebyEmail(){
    this.employeeService.getEmployeeByEmail(this.email).subscribe(
      res=>{
        this.loggedUser = res
        console.log(this.loggedUser)
        this.profilUser = this.loggedUser?.firstName
        this.Imatricule = this.loggedUser?.identity
        this.id = this.loggedUser.id
        console.log(this.id)
        this.getAccountNum()
      },err=>{
        console.log(err)
      }
    )
  }

  getRelationType(){
  }



}
