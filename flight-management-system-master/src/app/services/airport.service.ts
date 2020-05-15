import {Injectable} from '@angular/core';
import {Airport} from "../models/airport";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private airportList: Airport[] = [];
  private readonly airportUrl = `${environment.baseUrl}/airport/airport`

  constructor(private http: HttpClient) {
  }

  getAirports(): Observable<any> {
    return this.http.get(`${this.airportUrl}/getAirports`);
  }
}
