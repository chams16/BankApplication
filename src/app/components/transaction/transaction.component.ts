import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {Transactionrequest} from "../../Models/transactionrequest";
import {TransactionService} from "../../service/transactionService/transaction.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  myform!: FormGroup;

  constructor(private fb:FormBuilder,private route:Router, private toastr: ToastrService,private service:TransactionService) {
    let formControls ={
      receiverName : new FormControl(),
      senderName : new FormControl(),
      receiverAccountNumber : new FormControl(),
      senderAccountNumber : new FormControl(),
      amount : new FormControl(),
      code : new FormControl(),
      password:new FormControl()
    }
    this.myform = this.fb.group(formControls)
  }

  ngOnInit(): void {
  }

  send(){
    let data = this.myform.value
    let request = new Transactionrequest(data.receiverName,data.receiverAccountNumber,data.amount,data.senderName,data.senderAccountNumber,data.password,data.code)
    this.service.applyTransation(request).subscribe(
      res=>{
        this.toastr.success("your transaction sent to be evaluated")
        this.route.navigate(['/dashboard'])
      },
      err=>{
        this.toastr.error("verify your data something wrong")
      }
    )
  }

}
