import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-winners-section',
  templateUrl: './winners-section.component.html',
  styleUrls: ['./winners-section.component.css']
})
export class WinnersSectionComponent implements OnInit {
  winnersURL = "https://ergast.com/api/f1/2021/driverStandings.json?limit=3";
  winnerDetails = [];
  imageUrl = "../../assets/images/driver.png";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.winnersURL).subscribe((resp: any) => {
      this.getRaces(resp.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    })
  }
  getRaces(races) {
    this.winnerDetails = races;
  }
}

