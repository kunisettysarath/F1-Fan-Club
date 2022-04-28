import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { environment } from './../../../environments/environment';
import { UserDetailService } from "../../services/user-detail.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() event: EventEmitter<string> = new EventEmitter();

  signup: string = 'signup';
  url: string = environment.currentServerURL + '/api/login';
  loginForm: FormGroup;
  toast;
  user: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userDetailService: UserDetailService) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      pass: ['', Validators.required],

    });
  }

  result() {
    if (this.loginForm.valid) {
      this.http.post(this.url, { data: this.loginForm.value })
        .subscribe((response) => {
          console.log(response['token']+"----------------------------");
          localStorage.setItem("token", response['token']);
          if (response['data'] === "") {
            this.toastM('Wrong Credentials !', 4000, "red")
          } else {
            this.toastM('Login Successfull !', 4000, "green")
            this.user = response['data'];
            this.user.isLoggedIn = true;
            this.userDetailService.setUserDetails(response['data']);
            localStorage.setItem("userpass", JSON.stringify(response['data']));
            $('#modal-login').modal('close');
          }
        });
    } else {
      this.toastM('wrong Credentials !', 4000, "red")
    }
  }

  setSignUp(data) {
    this.event.emit(data);
  }

  ngOnInit() { }

  toastM(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}

