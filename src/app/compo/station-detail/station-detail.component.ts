import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { StationResponse } from 'src/app/interfaces/stationResponse';



//import{StationsService} from './stations.service';

//lisen to state changement in router
//import { ActivatedRoute } from '@angular/router';
//import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  @Input() station?: StationResponse;
  

  //constructor(private  StationService, private route: ActivatedRoute) { }
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  // ngOnInit():  {
  //  this.route.paramMap.pipe( switchMap(params => this.StationService.getStation(params.get('name')))).subscribe(station => this.station = station);
  // }

}
