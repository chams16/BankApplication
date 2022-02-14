import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../service/userService/user-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn!:Boolean

  constructor(private userService:UserAuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn()
  }

}
