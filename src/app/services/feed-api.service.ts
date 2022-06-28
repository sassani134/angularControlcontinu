import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StationResponse } from '../interfaces/stationResponse';
import { StationGet } from '../interfaces/stationGet';

@Injectable({
  providedIn: 'root'
})
export class FeedApiService {

  private stationsUrl = 'http://ip24.ip-51-161-69.net/api/station';


  constructor( private httpClient: HttpClient) { }

  // getAllStations(){
  //   return this.httpClient.get(this.stationsUrl)
  // }

  getAllStations(): Observable<StationGet> {
    return this.httpClient.get<StationGet>(this.stationsUrl);
  }
}
