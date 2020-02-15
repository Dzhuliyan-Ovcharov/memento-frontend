import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiUrls } from '../constants';
import { JwtHelperService } from '../helpers/JwtHelperService';
import { User } from '../models/user.model';
import { UserRegister } from '../models/userRegister.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelperSerice: JwtHelperService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(apiUrls.login, user);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(apiUrls.home);
  }

  register(userRegister: UserRegister): Observable<any> {
    return this.http.post<UserRegister>(apiUrls.register, userRegister);
  }

  fillLocalData(data: any): void {
    localStorage.setItem('token', data['token']);
  }

  isAuthenticated(): boolean {
    return this.jwtHelperSerice.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.jwtHelperSerice.isAdmin();
  }

  getToken(): string { 
    return this.jwtHelperSerice.getToken();
  }
}
