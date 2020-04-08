import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserProfile } from 'src/app/data/models/user-profile.model';
import { apiUrls } from 'src/app/shared/constants';
import { User } from 'src/app/data/models/user.model';
import { JwtHelperService } from './jwt-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser = new BehaviorSubject<User>(null);
  public currentUser$ = this.currentUser.asObservable();

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService) { }

  getUserProfileByEmail(email: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${apiUrls.users}/${email}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrls.users}`);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$;
  }

  fillCurrentUserFromToken(): void {
    const user: User = {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail()
    }

    this.currentUser.next(user);
  }

  isAdmin(): boolean {
    return this.jwtHelperService.isTokenValid() && 
          this.jwtHelperService.getDataFromToken('scopes') === 'ADMIN';
  }

  private getFirstName(): string {
    return this.jwtHelperService.getDataFromToken('firstName');
  }

  private getLastName(): string {
    return this.jwtHelperService.getDataFromToken('lastName');
  }

  private getEmail(): string {
    return this.jwtHelperService.getDataFromToken('sub');
  }
}
