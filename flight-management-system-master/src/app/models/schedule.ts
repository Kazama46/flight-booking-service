import {Airport} from "./airport";

export class Schedule {
  scheduleId: number;
  sourceAirport: Airport;
  destinationAirport: Airport;
  arrivalTime: string;
  departureTime: string;


  constructor(schedule) {
    if (schedule.hasOwnProperty('scheduleId'))
      this.scheduleId = schedule.scheduleId;
    this.sourceAirport = schedule.sourceAirport;
    this.destinationAirport = schedule.destinationAirport;
    this.arrivalTime = schedule.arrivalTime;
    this.departureTime = schedule.departureTime;
  }
}

