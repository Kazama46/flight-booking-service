export class Flight {
  flightNumber: number;
  flightModel: string;
  carrierName: string;
  seatCapacity: number;


  constructor(flight) {
    if (flight.hasOwnProperty('flightNumber'))
      this.flightNumber = flight.flightNumber;
    this.flightModel = flight.flightModel;
    this.carrierName = flight.carrierName;
    this.seatCapacity = flight.seatCapacity;
  }
}
