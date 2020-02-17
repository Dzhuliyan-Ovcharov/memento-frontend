import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from 'src/app/data/models/role.model';
import { apiUrls } from 'src/app/shared/constants';

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
