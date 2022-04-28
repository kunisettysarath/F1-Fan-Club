import { UserDetailService } from './../../../services/user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  constructor(private _data: UserDetailService) {
  }

  ngOnInit() { }
}
