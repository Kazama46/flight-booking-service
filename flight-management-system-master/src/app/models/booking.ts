import {ScheduledFlight} from "./scheduled-flight";
import {Passenger} from "./passenger";

export class Booking {
  bookingId: number;
  scheduleFlight: ScheduledFlight;
  passengerList: Passenger[];
  userId: number;
  bookingDate: Date;
  ticketCost: number;
  numberOfPassenger: number;
  cancelled: boolean;
  expired: boolean;


  constructor(booking) {
    if (booking.hasOwnProperty('bookingId'))
      this.bookingId = booking.bookingId;
    this.scheduleFlight = booking.scheduleFlight;
    this.passengerList = booking.passengerList;
    this.userId = booking.userId;
    this.bookingDate = booking.bookingDate;
    this.ticketCost = booking.ticketCost;
    this.numberOfPassenger = booking.numberOfPassenger;
    if (booking.hasOwnProperty('cancelled'))
      this.cancelled = booking.cancelled;
    if (booking.hasOwnProperty('expired'))
      this.expired = booking.expired;
  }
}
