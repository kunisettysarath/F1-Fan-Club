import { environment } from '../../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dcard',
  templateUrl: './dcard.component.html',
  styleUrls: ['./dcard.component.css']
})
export class DcardComponent implements OnInit {
  driverURL: string = '';
  driverstandingDetail: Object = {};
  driverRaceDetail: Object = {maxAvgSpeed:0};
  personaldetails= {givenName:'', familyName:'', nationality:'', url:'', description:'', dateOfBirth:''};
  team: String = '';
  driver: String = '';
  data: any;
  show = false;
  imageUrl = "assets/images/driver.png";

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.driverURL = environment.currentServerURL + "/api";
    this.route.params.subscribe((params) => {
      this.driver = params.driver;
      
      this.getteam(params.driver); 
      this.personaldetail(params.driver);
      this.getstandings(params.driver);
    });
  }
  getteam(driverid) {
    let driverTeamURL = this.driverURL + "/driver_detail/" + driverid;
    this.http.get(driverTeamURL)
      .subscribe((resp) => {

        let arr = new Array;
        arr = resp['track'];

        var uniqueSet = new Set(arr);
        resp['track'] = uniqueSet;
        this.driverRaceDetail = resp;

      });
  }

  getstandings(driverid) {
    let driverTeamURL = this.driverURL + "/driverStangingDetail/" + driverid;
    this.http.get(driverTeamURL)
      .subscribe((resp) => {

        this.data = {
          labels: resp['year'],
          datasets: [
            {
              label: 'Driver Standings',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: resp['standing']
            },
            {
              label: 'No. Of Wins',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: resp['wins']
            }
          ]
        }
      });
  }
  personaldetail(driverid) {
    let driverTeamURL = this.driverURL + "/driverPersonalDetail/" + driverid;
    
    this.http.get(driverTeamURL)
      .subscribe((resp) => {
        this.personaldetails.familyName = resp['familyName'];
        this.personaldetails.givenName = resp['givenName'];
        this.personaldetails.dateOfBirth = resp['dateOfBirth'];
        this.personaldetails.description = resp['description'];
        this.personaldetails.nationality = resp['nationality'];
        this.personaldetails.url = resp['url'];
        this.show = true;
        var desc = <HTMLInputElement>document.getElementById("desc");
        desc.innerHTML = this.personaldetails.description;
      });
  } 
}
