import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdType } from '../models/ad-type.model';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AdTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<AdType[]> {
    return this.http.get<AdType[]>(apiUrls.adTypes);
  }

  save(adType: AdType): Observable<AdType> {
    return this.http.post<AdType>(apiUrls.adTypes, adType);
  }

  findByType(type: string): Observable<AdType> {
    return this.http.get<AdType>(`${apiUrls.adTypes}/type/${type}`); 
  }
}
