import {Injectable} from '@angular/core';
import {Flight} from "../models/flight";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private selectedFlight: Flight;
  private readonly flightUrl = `${environment.baseUrl}/flight/flight`

  constructor(private http: HttpClient) {
  }

  getFlights(): Observable<any>{
    return this.http.get(`${this.flightUrl}/showAllFlights`);
  }

  addFlights(newFlight:Flight): Observable<any>{
    return this.http.post<any>(`${this.flightUrl}/addFlight`,newFlight);
  }

  updateFlights(flight:Flight): Observable<any>{
    return this.http.put<any>(`${this.flightUrl}/modifyFlight`,flight);
  }

  deleteFlight(flightNumber: number): Observable<any>{
    return this.http.delete(`${this.flightUrl}/deleteFlight/${flightNumber}`)
  }

  addSelectedFlight(flight:Flight): void{
    this.selectedFlight = flight;
  }

  getSelectedFlight(): Flight{
    return this.selectedFlight;
  }

  clearSelectedFlight(){
    this.selectedFlight=null;
  }
}
