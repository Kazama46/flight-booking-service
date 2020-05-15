import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Role} from "./models/role.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-booking-system';


  constructor(public authService: AuthenticationService) {
  }

  logout() {
    this.authService.logout();
  }

}
