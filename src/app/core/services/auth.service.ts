import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/models/user.model';
import { UserRegister } from 'src/app/data/models/user-register.model';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(apiUrls.authenticate, user);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(apiUrls.home);
  }

  register(userRegister: UserRegister): Observable<any> {
    return this.http.post<UserRegister>(apiUrls.users, userRegister);
  }

  fillLocalData(token: string): void {
    localStorage.setItem('token', token);
  }
}
