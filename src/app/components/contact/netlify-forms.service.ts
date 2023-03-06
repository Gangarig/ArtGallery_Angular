import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { contactFormData } from './contact-Form-data';

@Injectable({
  providedIn: 'root'
})
export class NetlifyFormsService {

  constructor(private http: HttpClient) { }

  submitFeedback(commentEntry: contactFormData): Observable<any> {

    const entry = new HttpParams({
      fromObject: {
        ...commentEntry
      }
    });

    return this.http
      .post(
        isDevMode() ? 'http://localhost:8000/' : '/',
        entry.toString(),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          responseType: 'text'
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if (err.error instanceof ErrorEvent) {
      errMsg = `A client-side error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server-side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(() => new Error(errMsg));
  }
}
