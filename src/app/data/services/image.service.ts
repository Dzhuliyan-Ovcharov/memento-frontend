import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';


@Injectable({
    providedIn: 'root'
})
export class ImageService {


    constructor(private http: HttpClient) { }

    save(images: FormData, estateId: number): Observable<any> {
        return this.http.post<any>(`${apiUrls.images}/all/estate/${estateId}`, images)
    }

}
