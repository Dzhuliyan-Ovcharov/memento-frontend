import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          console.log(error);
          if (error.error instanceof ErrorEvent) {
            // client error
            errorMessage = `Грешка: ${error.error}`;
          } else {
            // server error
            errorMessage = `Грешка статус: ${error.status}\n Съобщение: ${error.error}`;
          }

          this.snackBar.open(errorMessage, "Потвърди", {
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: 'snack-error'
          });

          console.log(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
