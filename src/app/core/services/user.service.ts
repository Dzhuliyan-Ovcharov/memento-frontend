import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/data/models/user-profile.model';
import { apiUrls } from 'src/app/shared/constants';
import { User } from 'src/app/data/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfileByEmail(email: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${apiUrls.users}/${email}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrls.users}`);
  }
}
