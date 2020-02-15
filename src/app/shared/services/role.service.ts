import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrls } from '../constants';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<string[]> {
    return this.http.get<Role[]>(apiUrls.roles)
      .pipe(
        map(roles => { return roles.map((role: Role) => role.permission)})
      )
  }
}
