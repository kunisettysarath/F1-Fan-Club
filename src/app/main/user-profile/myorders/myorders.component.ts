import {environment} from '../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { UserDetailService } from "./../../../services/user-detail.service";
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders: any=[];
  gotData:boolean=false;
  logoURL = environment.currentServerURL + "/api/logos/f1-logo.png";
  url: string = environment.currentServerURL + "/api/myorders";
  
  constructor(private userDetailService: UserDetailService, private http: HttpClient) { }
  ngOnInit() {
     const authToken = localStorage.getItem("token");
     const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Authorization', authToken);
    this.http.post(this.url, { userId: this.userDetailService.id }, { headers: headers })
     .subscribe((response: any) => {
        this.orders = response.data;
        this.gotData = true;
      })
    $(".button-collapse").sideNav();
  }
}
