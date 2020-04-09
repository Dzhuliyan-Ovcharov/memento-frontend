import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estate } from '../models/estate.model'
import { apiUrls } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }

  create(estate: Estate): Observable<Estate> {
    return this.http.post<Estate>(apiUrls.estates, estate);
  }

  getAll(): Observable<Estate[]> {
    return this.http.get<Estate[]>(`${apiUrls.estates}`);
  }
}
