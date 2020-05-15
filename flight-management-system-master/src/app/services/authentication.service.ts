import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../models/login-request";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  jwtHelper = new JwtHelperService();
  authUrl = `${environment.baseUrl}/auth/auth`;


  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/signin`, loginRequest);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/signup`, user);
  }

  forgetPassword(email): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    return this.http.post<any>(`${this.authUrl}/forgotPassword`, formData);
  }

  updatePassword(token, password): Observable<any> {
    const formData = new FormData();
    formData.append('token', token);
    formData.append('password', password);
    return this.http.post<any>(`${this.authUrl}/reset`, formData);
  }

  logout() {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') && !this.jwtHelper.isTokenExpired(this.getUser().token);
  }

  saveUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser() {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }

  getRole() {
    return new User(JSON.parse(localStorage.getItem('currentUser'))).roles[0];
  }

  getUserId() {
    return new User(JSON.parse(localStorage.getItem('currentUser'))).userId;
  }
}
