import {Flight} from "./flight";
import {Schedule} from "./schedule";

export class ScheduledFlight {
  scheduleFlightId: number;
  flight: Flight;
  availableSeats: number
  schedule: Schedule;


  constructor(scheduledFlight) {
    if (scheduledFlight.hasOwnProperty('scheduleFlightId'))
      this.scheduleFlightId = scheduledFlight.scheduleFlightId;
    this.flight = scheduledFlight.flight;
    this.availableSeats = scheduledFlight.availableSeats;
    this.schedule = scheduledFlight.schedule;
  }
}
