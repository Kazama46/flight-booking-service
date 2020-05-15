import {Injectable} from '@angular/core';
import {Booking} from "../models/booking";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly bookingUrl = `${environment.baseUrl}/booking/booking`
  private booking: Booking;
  private bookingList: Booking[] = [];


  constructor(private http: HttpClient) {
  }

  getBookingList(userId: number): Observable<any> {
    return this.http.get(`${this.bookingUrl}/viewbyuserid/${userId}`);
  }

  addBooking(booking): Observable<any> {
    return this.http.post(`${this.bookingUrl}/addBooking`, booking);
  }

  deleteBooking(bookingId: number):Observable<any>{
    return this.http.delete(`${this.bookingUrl}/cancel/${bookingId}`)
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get(`${this.bookingUrl}/viewbybookingid/${id}`)
  }
}
