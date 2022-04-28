import { UserDetailService } from '../../services/user-detail.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient, private userDetailService: UserDetailService) { }
  url: string = environment.currentServerURL + '/api/news';
  newsData = [];
  p: number = 1;
  newsUrl: string = environment.currentServerURL;
  socialNewsURL = "http://localhost:4200/#/news/details/";
  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.http.get(this.url)
      .subscribe((resp) => {
        this.setNews(resp['data']);
      })
  }

  setNews(news) {
    this.newsData = news;
  }
  pointsUpdate(num: number) {
    this.userDetailService.updatePoints(num);
  }
}
