import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-driver-stats',
  templateUrl: './driver-stats.component.html',
  styleUrls: ['./driver-stats.component.css']
})
export class DriverStatsComponent implements OnInit {
  url: string = environment.currentServerURL + "/api/drivers";
  alldrivers = [];
  drivers = [];
  p: number = 1;
  driverSearch: string = '';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    this.http.get(this.url).subscribe((e) => {
      this.setdata(e['data']);
    })
  }

  setdata(e) {
    this.alldrivers = e;
    this.drivers = this.alldrivers;
  }
 
}
