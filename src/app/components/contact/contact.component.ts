import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from "../../service/appService/api-service.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Contact} from "../../Models/Contact";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myform!: FormGroup;
  token=localStorage.getItem("myToken")
  //decoded = jwt_decode(this.token);

  constructor(private fb:FormBuilder,private route:Router,private service:ApiServiceService,private toastr:ToastrService) {
    let formControls ={
      receiverEmail : new FormControl(),
      receiverName : new FormControl(),
      phone : new FormControl(),
      emailContent : new FormControl()
    }
    this.myform = this.fb.group(formControls)
  }

  ngOnInit(): void {
  }

  send(){
    let data = this.myform.value
    let request = new Contact(data.receiverEmail,data.receiverName,data.phone,data.emailContent)
    this.service.contactUs(request).subscribe(
      res=>{
        this.toastr.success("your email sent successfully")
        this.route.navigate(['/home'])
      },
      err=>{
        this.toastr.error("verify your data something wrong")
      }
    )
  }

}
