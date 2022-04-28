import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons-page.component.html',
  styleUrls: ['./seasons-page.component.css']
})
export class SeasonsPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  seasonsURL = environment.currentServerURL + "/api/seasons";
  seasonsList:any;

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    /* fetching seasons list */
    this.http.get(this.seasonsURL)
      .subscribe((resp) => {
        this.assignValues(resp);
      });
  }

  assignValues(resp){
    this.seasonsList = resp.data;
  }
}
