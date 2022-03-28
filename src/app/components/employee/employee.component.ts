import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../service/employeeService/employee-service.service";
import {NaturalPersonDto} from "../../Models/naturalPersonDto";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeList:NaturalPersonDto[]=[]

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      res=>{
        this.EmployeeList=res
        console.log(this.EmployeeList)
      },err=>{
        console.log(err)
      }
    )
  }

  sendMoney(employee:NaturalPersonDto){
    console.log(employee)
  }





}
