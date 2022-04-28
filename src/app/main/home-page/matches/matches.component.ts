import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  showMore: boolean = true;
  url: string = environment.currentServerURL + '/api/upcoming_races';
  allMatches = [];
  matches = [];
  flag = false;

  ngOnInit() {
    this.http.get(this.url).subscribe((resp) => {
      this.upcomingMatches(resp);
    })
  }
  upcomingMatches(matches) {
    this.allMatches = matches;
    this.matches = this.allMatches.slice(0, 6);
    this.flag = true;

  }
}
