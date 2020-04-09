import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '../services/jwt-helper.service';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class JwtHeaderInterceptor implements HttpInterceptor {

  contentType: string;

  constructor(private jwtHelperService: JwtHelperService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.contentType = 'application/json';

    if (request.url === apiUrls.estates && request.method === 'POST') {
      this.contentType = undefined;
    }
    
    const token: string = this.jwtHelperService.getToken();
    const jsonRequest: HttpRequest<any> = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        //'Content-Type': this.contentType,
        'Access-Control-Allow-Origin': '*'
      }
    })

    return next.handle(jsonRequest);
  }
}
