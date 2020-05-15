import {Injectable} from '@angular/core';
import {ScheduledFlight} from "../models/scheduled-flight";
import {Flight} from "../models/flight";
import {Airport} from "../models/airport";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduledFlightService {

  private selectedScheduleFlight: ScheduledFlight;
  private readonly scheduleFlightUrl = `${environment.baseUrl}/schedule/schedule/`;

  constructor(private http: HttpClient) {
  }

  getScheduleFlights(): Observable<any> {
    return this.http.get(`${this.scheduleFlightUrl}/showScheduleData`);
  }

  addScheduleFlight(scheduledFlight: ScheduledFlight): Observable<any> {
    return this.http.post<any>(`${this.scheduleFlightUrl}/addScheduleFlight`, scheduledFlight);
  }

  getScheduleFlightById(id: number): Observable<any> {
    return this.http.get(`${this.scheduleFlightUrl}/showDatabyId/${id}`);
  }

  updateScheduleFlight(scheduledFlight: ScheduledFlight): Observable<any> {
    console.log(JSON.stringify(scheduledFlight));
    return this.http.put(`${this.scheduleFlightUrl}/modifyScheduleFlight`, scheduledFlight);
  }

  deleteScheduleFlight(id: number): Observable<any> {
    return this.http.delete(`${this.scheduleFlightUrl}/deleteScheduleFlight/${id}`);
  }

  getSelectedScheduleFlight(): ScheduledFlight {
    return this.selectedScheduleFlight;
  }

  setSelectedScheduleFlight(value: ScheduledFlight) {
    this.selectedScheduleFlight = value;
  }

  clearSelectedSchedule() {
    this.selectedScheduleFlight = null;
  }
}
