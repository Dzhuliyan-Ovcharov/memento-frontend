import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiUrls } from '../constants';
import { User } from '../models/user.model';
import { UserRegister } from '../models/userRegister.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(apiUrls.login, user);
  }

  fillLocalData(data: any): void {
    localStorage.setItem('token', data['token']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(apiUrls.home);
  }

  register(userRegister: UserRegister): void {
    this.http.post<UserRegister>(apiUrls.register, userRegister);
  }
}
