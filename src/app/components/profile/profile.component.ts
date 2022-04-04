import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../service/employeeService/employee-service.service";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilUser: string | undefined
  email:string | undefined
  mail=''
  phone:string | undefined
  loggedUser: NaturalPersonDto | undefined

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.decodeToken()

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
        this.profilUser = this.loggedUser?.firstName
        console.log(this.profilUser)
        this.phone=this.loggedUser?.phone
        console.log(this.phone)
      },err=>{
        console.log(err)
      }
    )
  }

}
