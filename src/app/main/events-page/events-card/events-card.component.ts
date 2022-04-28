import { Component, OnInit, Input } from '@angular/core';
import { UserDetailService } from "./../../../services/user-detail.service";
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.css']
})
export class EventsCardComponent implements OnInit {
  eventId:any;
  constructor(private userDetailService: UserDetailService, private http: HttpClient) { }
  url: string = environment.currentServerURL + "/api/eventBooking";
  @Input()
  event:{_id:string, location: {locality: string,country: string},title:string,description:string,imgURL:string,date:string}={_id:'',location: {locality:'',country:''},title:'',description:'',imgURL:'',date:''};

  ngOnInit() {
    this.eventId=this.event._id;
    this.event.imgURL =environment.currentServerURL + "/api/event/thumbnail/" + this.event.imgURL + ".jpg"
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}

