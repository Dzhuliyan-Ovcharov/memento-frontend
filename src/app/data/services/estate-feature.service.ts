import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';
import { EstateFeature } from '../models/estate-feature.model';

@Injectable({
  providedIn: 'root'
})
export class EstateFeatureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EstateFeature[]> {
    return this.http.get<EstateFeature[]>(apiUrls.estateFeatures);
  }

  save(estateFeature: EstateFeature): Observable<EstateFeature> {
    return this.http.post<EstateFeature>(apiUrls.estateFeatures, estateFeature);
  }

  findByFeature(feature: string): Observable<EstateFeature> {
    return this.http.get<EstateFeature>(`${apiUrls.estateFeatures}/feature/${feature}`); 
  }
}
