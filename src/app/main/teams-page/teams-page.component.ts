import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  teamsDetails: any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.materialboxed').materialbox();
    let teamsURL = environment.currentServerURL + "/api/teams";
    this.http.get(teamsURL)
      .subscribe((res) => {
        this.teamsDetails = res['data'];
      });
  }
}
