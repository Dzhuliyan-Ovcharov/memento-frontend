import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';


@Injectable({
    providedIn: 'root'
})
export class ImageService {

    statuses: string[] = [];

    constructor(private http: HttpClient) { }

    save(image: any, estateId: number): Observable<string> {
        console.log(image);
        return this.http.post<any>(`${apiUrls.images}/estate/${estateId}`, image)
    }

}
