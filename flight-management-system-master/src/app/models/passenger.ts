export class Passenger {
  passengerName: string;
  passengerGender: string;
  passengerAge: number;
  passengerUIN: number;


  constructor(passenger) {
    this.passengerName = passenger.passengerName;
    this.passengerGender = passenger.passengerGender;
    this.passengerAge = passenger.passengerAge;
    this.passengerUIN = passenger.passengerUIN;
  }
}
