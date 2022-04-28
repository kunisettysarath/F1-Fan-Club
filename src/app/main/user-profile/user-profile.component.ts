import {Router} from '@angular/router';
import { UserDetailService } from './../../services/user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor( 
    private userDetailService: UserDetailService,
    private router:Router) { }

  color: string = "#660000";
  name:string="";
  email: string = "";
  profilePicUrl: string = "";

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $(".button-collapse").sideNav();
    
    this.email = this.userDetailService.email;
    this.profilePicUrl = this.userDetailService.profilePicUrl;
    this.name = this.userDetailService.name;    
    this.setColor(this.userDetailService.level);
  }

  setColor(level) {
    if (level == "III") {
      this.color = "#a32020";
    } else if (level == "II") {
      this.color = "#0a8e94";
    } else if (level == "I") {
      this.color = "#19b319";
    }
  }
   public logOut() {
     this.userDetailService.logOutUser();
     this.router.navigate(['/']);  
  }
}
