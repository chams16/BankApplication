import { Component } from '@angular/core';
import jwt_decode from "jwt-decode";
import {ApiServiceService} from "./service/appService/api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankApplication';

  constructor(private service:ApiServiceService) {
  }

  // decoded=jwt_decode(<string>localStorage.getItem("myToken"))
  //
  // ngOnInit(): void {
  //   console.log("decoded : ", this.decoded)
  //   // @ts-ignore
  //   console.log(this.decoded.sub)
  //   // @ts-ignore
  //   let email:string=this.decoded.sub
  //   this.service.getUSer(email).subscribe(
  //     res=>{
  //       console.log(res)
  //     },err=>{
  //       console.log("err",err)
  //     }
  //   )
  // }
  ngOnInit():void{
    console.log("start")
  }

}
