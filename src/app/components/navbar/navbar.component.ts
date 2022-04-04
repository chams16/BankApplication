import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../service/userService/user-auth.service";
import {Router} from "@angular/router";
import {EmployeeServiceService} from "../../service/employeeService/employee-service.service";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedUser: NaturalPersonDto | undefined
  loggedIn!:Boolean
  user: string | undefined =''
  email:string | undefined
  mail=''

  constructor(private userService:UserAuthService,
              private route:Router,
              private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn()
    this.decodeToken()
  }

  logout(){
    localStorage.removeItem("myToken")
    this.route.navigate(['/login'])
    window.location.reload()
  }


  decodeToken(){
    this.email=this.employeeService.decodeToken()
    this.mail = this.employeeService.decodeToken()
    this.getEmployeebyEmail()
  }

  getEmployeebyEmail(){
    this.employeeService.getEmployeeByEmail(this.mail).subscribe(
      res=>{
        this.loggedUser = res
        console.log(this.loggedUser)
        this.user = this.loggedUser?.firstName

      },err=>{
        console.log(err)
      }
    )
  }


}
