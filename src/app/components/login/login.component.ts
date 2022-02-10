import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserAuthService} from "../../service/userService/user-auth.service";
import {authenticationRequest} from "../../Models/authenticationRequest";
import {authenticationResponse} from "../../Models/authenticationResponse";
import {stringify} from "@angular/compiler/src/util";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform!: FormGroup;


  constructor(private fb:FormBuilder,private route:Router,private userservice:UserAuthService,
              private toastr:ToastrService) {

    let formControls ={
      username : new FormControl(),
      password:new FormControl()
    }
    this.myform = this.fb.group(formControls)
   }

  ngOnInit(): void {
    let isLoggedIn = this.userservice.isLoggedIn()
    if(isLoggedIn){
      this.route.navigate(['/dashboard'])
    }
  }

  login(){
      const name = this.myform.value.username
      const pass = this.myform.value.password
      let request = new authenticationRequest(name,pass);
      this.userservice.login(request).subscribe(
        res=>{
              let token:string=res.token

          console.log(token)
          localStorage.setItem("myToken",token)
          this.route.navigate(['/dashboard'])
          window.location.reload()
        },
        err=>{
          console.log(err)
          this.toastr.error(err.text.toString())
        }
      )
  }



}
