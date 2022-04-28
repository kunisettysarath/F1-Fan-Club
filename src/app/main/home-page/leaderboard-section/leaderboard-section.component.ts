import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaderboard-section',
  templateUrl: './leaderboard-section.component.html',
  styleUrls: ['./leaderboard-section.component.css']
})
export class LeaderboardSectionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  max = 0;
  uri = environment.currentServerURL + '/api/leaderboard';
  newsURL: string = environment.currentServerURL + '/api/news';
  data = [];
  newsData: any;
  show = false;

  ngOnInit() {
    this.http.get(this.uri)
      .subscribe((response) => {
        if (response['data']) {
          this.data = response['data'];
          this.max = this.data[0].points;
        }
      });


    this.http.get(this.newsURL)
      .subscribe((resp) => {
        this.setNews(resp['data']);
      })
  }
  setNews(news) {
    this.newsData = news;
    this.show = true;
  }
}