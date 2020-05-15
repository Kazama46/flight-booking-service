import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user/user-dashboard.component';
import { AddBookingComponent } from './components/user/booking/add-booking/add-booking.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewBookingsComponent } from './components/user/booking/view-bookings/view-bookings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './components/auth/update-password/update-password.component';
import {AuthenticationGuard} from "./helpers/authentication.guard";
import { ConfirmBookingComponent } from './components/user/booking/confirm-booking/confirm-booking.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddScheduleComponent } from './components/admin/schedule/add-schedule/add-schedule.component';
import { ViewScheduleComponent } from './components/admin/schedule/view-schedule/view-schedule.component';
import { AddFlightComponent } from './components/admin/flight/add-flight/add-flight.component';
import { ViewSchedulesComponent } from './components/admin/schedule/view-schedules/view-schedules.component';
import { ViewFlightsComponent } from './components/admin/flight/view-flights/view-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AddBookingComponent,
    ViewBookingsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    ConfirmBookingComponent,
    AdminComponent,
    AddScheduleComponent,
    ViewScheduleComponent,
    AddFlightComponent,
    ViewSchedulesComponent,
    ViewFlightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
