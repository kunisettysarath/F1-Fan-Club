import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http'

import { UserDetailService } from "../../../services/user-detail.service";
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  constructor(private http: HttpClient, private userDetailService: UserDetailService) { }
  bookingUri: string = environment.currentServerURL + '/api/bookings';
  data: any = [];
  gotData: boolean = false;
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.getBookings();
  }
  getBookings() {
     const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', authToken);
    console.log(authToken+"----------------------------");
    this.http.post(this.bookingUri, { email: this.userDetailService.email }, { headers: headers })
      .subscribe((resp: any) => {
        if (resp.data) {
          this.data = resp.data;
          this.gotData = true;
        }
      });
  }
}
