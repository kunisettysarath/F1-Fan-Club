import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-circuit-details',
  templateUrl: './circuit-details.component.html',
  styleUrls: ['./circuit-details.component.css']
})
export class CircuitDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  circuitDetail: any;
  show = false;
  circuitImage: any;
  tempImage = environment.currentServerURL + '/circuit_images/montjuic_Copy.png';

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.route.params.subscribe((params) => {
      this.getCircuitDetail(params.circuitId);
    });
  }

  getCircuitDetail(circuitId) {
    let circuitURL = environment.currentServerURL + "/api/circuits/circuit-details?circuitId=" + circuitId;
    this.http.get(circuitURL)
      .subscribe((resp) => {
        this.assignValues(resp);
      });

    let raceURL = environment.currentServerURL + "/api/circuits/circuit-details?circuitId=" + circuitId;
    this.http.get(circuitURL)
      .subscribe((resp) => {
        this.assignValues(resp);
      });
  }

  assignValues(resp) {
    this.circuitDetail = resp.data;
    this.circuitImage = environment.currentServerURL + '/circuit_images/' + this.circuitDetail.circuit.circuitId + '.png';
    this.show = true;
    var desc = <HTMLInputElement>document.getElementById("desc");
    desc.innerHTML = this.circuitDetail.circuit.desc;
     $('.materialboxed').materialbox();
  }

}
