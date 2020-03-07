import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Floor } from '../models/floor.model';
import { apiUrls } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Floor[]> {
    return this.http.get<Floor[]>(apiUrls.floors);
  }

  save(floor: Floor): Observable<Floor> {
    return this.http.post<Floor>(apiUrls.floors, floor);
  }

  findByNumber(number: number): Observable<Floor> {
    return this.http.get<Floor>(`${apiUrls.floors}/number/` + number)
  }
}
