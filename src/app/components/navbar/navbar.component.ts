import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../service/userService/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn!:Boolean
  user="chams"

  constructor(private userService:UserAuthService,
              private route:Router) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn()
  }

  logout(){
    localStorage.removeItem("myToken")
    this.route.navigate(['/login'])
    window.location.reload()
  }

}
