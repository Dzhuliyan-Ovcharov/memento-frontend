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

  findById(estateId: number): Observable<Estate> {
    return this.http.get<Estate>(`${apiUrls.estates}/${estateId}`);
  }

  create(estate: Estate): Observable<Estate> {
    return this.http.post<Estate>(apiUrls.estates, estate);
  }

  update(id: number, estate: Estate): Observable<Estate> {
    return this.http.put<Estate>(`${apiUrls.estates}/${id}`, estate);
  }

  getAll(): Observable<Estate[]> {
    return this.http.get<Estate[]>(apiUrls.estates);
  }

  getLatest(count: number): Observable<Estate[]> {
    return this.http.get<Estate[]>(`${apiUrls.estates}/latest/${count}`);
  }

  getAllByEmail(email: string): Observable<Estate[]> {
    return this.http.get<Estate[]>(`${apiUrls.estates}/email/${email}`);
  }
}
