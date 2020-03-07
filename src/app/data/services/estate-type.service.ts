import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstateType } from '../models/estate-type.model';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class EstateTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EstateType[]> {
    return this.http.get<EstateType[]>(apiUrls.estateTypes);
  }

  save(estateType: EstateType): Observable<EstateType> {
    return this.http.post<EstateType>(apiUrls.estateTypes, estateType);
  }

  update(estateType: EstateType): Observable<EstateType> {
    return this.http.put<EstateType>(`${apiUrls.estateTypes}/${estateType.id}`, estateType);
  }

  findByType(type: string): Observable<EstateType> {
    return this.http.get<EstateType>(`${apiUrls.estateTypes}/${type}`);
  }
}
