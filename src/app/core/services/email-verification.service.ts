import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private http: HttpClient) { }

  verifyEmail(verificationToken: string): Observable<any> {
    return this.http.get<any>(apiUrls.emailverification, {
      params: {
        token: verificationToken
      }
    });
  }
}
