import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  eventsURL = environment.currentServerURL + "/api/upcoming-events";
  eventsData: any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    this.http.get(this.eventsURL)
      .subscribe((resp) => {
        this.assignEventsData(resp);
      });
  }

  assignEventsData(x) {
    this.eventsData = x.data;
  }
}
