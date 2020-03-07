import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstateCreate } from '../models/estate-create.model'
import { apiUrls } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }

  create(estateCreate: EstateCreate): Observable<EstateCreate> {
    return this.http.post<EstateCreate>(apiUrls.estates, estateCreate);
  }
}
