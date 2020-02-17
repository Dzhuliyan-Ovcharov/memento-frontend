import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '../services/jwt-helper.service';

@Injectable({
  providedIn: 'root'
})
export class JwtHeaderInterceptor implements HttpInterceptor {

  constructor(private jwtHelperService: JwtHelperService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.jwtHelperService.getToken();
    const jsonRequest: HttpRequest<any> = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

    return next.handle(jsonRequest);
  }
}
