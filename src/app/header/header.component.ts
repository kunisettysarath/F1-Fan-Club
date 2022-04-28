import { UserDetailService } from './../services/user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signup: string = "login";
  constructor(
    private _data: UserDetailService) { }

  isLogin = false;
  ngOnInit() {
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      draggable: true,
    });

    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
    }
    );


    /* on login header modification */
    if (this._data.isLoggedIn)
      this.isLogin = this._data.isLoggedIn;
  }
  setSignUp(data) {
    this.signup = data;
  }
}