import { Component, OnInit } from '@angular/core';
import {StationResponse} from '../../interfaces/stationResponse';
import {StationGet} from '../../interfaces/stationGet';
import {FeedApiService} from '../../services/feed-api.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {


  listStation : StationResponse[] = [];
  selectedStation?: StationResponse;
  

  //constructor(private StationService) { }
  constructor(private feedservice: FeedApiService) { }

  showStations() {
    this.feedservice.getAllStations().subscribe((data) => {
      console.log(data);
      this.listStation = data.$values;
    });
  };

  onSelect(station: StationResponse): void {
    this.selectedStation = station;
  }

  /*
    ngOnInit(): {
    this.station$ = this.afs .collection('stations').valueChanges();
  }
  */


  ngOnInit(): void {
    this.showStations();
  }

}
