import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/models/user.model';
import { UserRegister } from 'src/app/data/models/userRegister.model';
import { JwtHelperService } from 'src/app/shared/helpers/JwtHelperService';
import { apiUrls } from 'src/app/shared/constants';

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
    return this.http.post<User>(apiUrls.authenticate, user);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(apiUrls.home);
  }

  register(userRegister: UserRegister): Observable<any> {
    return this.http.post<UserRegister>(apiUrls.users, userRegister);
  }

  fillLocalData(token: any): void {
    localStorage.setItem('token', token);
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
