import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f1-history-page',
  templateUrl: './f1-history-page.component.html',
  styleUrls: ['./f1-history-page.component.css']
})
export class F1HistoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.materialboxed').materialbox();
  }

}
