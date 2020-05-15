import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDashboardComponent} from "./components/user/user-dashboard.component";
import {AddBookingComponent} from "./components/user/booking/add-booking/add-booking.component";
import {ViewBookingsComponent} from "./components/user/booking/view-bookings/view-bookings.component";
import {ForgotPasswordComponent} from "./components/auth/forgot-password/forgot-password.component";
import {UpdatePasswordComponent} from "./components/auth/update-password/update-password.component";
import {Role} from "./models/role.enum";
import {AuthenticationGuard} from "./helpers/authentication.guard";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {ConfirmBookingComponent} from "./components/user/booking/confirm-booking/confirm-booking.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AddFlightComponent} from "./components/admin/flight/add-flight/add-flight.component";
import {AddScheduleComponent} from "./components/admin/schedule/add-schedule/add-schedule.component";
import {ViewSchedulesComponent} from "./components/admin/schedule/view-schedules/view-schedules.component";
import {ViewScheduleComponent} from "./components/admin/schedule/view-schedule/view-schedule.component";
import {ViewFlightsComponent} from "./components/admin/flight/view-flights/view-flights.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "/login"},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addBooking', component: AddBookingComponent},
  {path: 'bookings', component: ViewBookingsComponent},
  {path: 'confirmBooking/:id', component: ConfirmBookingComponent},
  {path: 'booking/:id', component: ConfirmBookingComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent},
  {path: 'user', component: UserDashboardComponent, canActivate: [AuthenticationGuard], data: {roles: [Role.User]}},
  {path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard], data: {roles: [Role.Admin]}},
  {path: 'addFlight', component: AddFlightComponent},
  {path: 'flights', component: ViewFlightsComponent},
  {path: 'addSchedule', component: AddScheduleComponent},
  {path: 'schedules', component: ViewSchedulesComponent},
  {path: 'schedule/:id', component: ViewScheduleComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
