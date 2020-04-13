import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/data/models/user-register.model';
import { User } from 'src/app/data/models/user.model';
import { apiUrls } from 'src/app/shared/constants';
import { JwtHelperService } from './jwt-helper.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelperService: JwtHelperService,
    private userService: UserService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrls.users}/authenticate`, user);
  }

  logout(): void {
    this.jwtHelperService.clearToken();
    this.userService.clearCurrentUserBehaviourSubject();
    
    this.router.navigateByUrl('/home');
  }

  register(userRegister: UserRegister): Observable<any> {
    return this.http.post<UserRegister>(apiUrls.users, userRegister);
  }

  fillData(token: string): void {
    this.jwtHelperService.setToken(token);
    this.userService.fillCurrentUserFromToken();
  }

  isAuthenticated(): boolean {
    return this.jwtHelperService.isTokenValid();
  }
}
