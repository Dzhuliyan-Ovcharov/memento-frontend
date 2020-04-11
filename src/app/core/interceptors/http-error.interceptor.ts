import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarHelperService } from '../services/snack-bar-helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBarHelperService: SnackBarHelperService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          error.error instanceof ErrorEvent ?
            errorMessage = `Грешка: ${error.error}` :
            errorMessage = `${error.error}`;

          this.snackBarHelperService.showDefaultError(errorMessage, 'Потвърди');

          console.log(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
