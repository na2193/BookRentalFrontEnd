import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { User } from '../_models/user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred on the Client Side:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `Error message ${error.error.message}, ` +
          `Body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      window.alert('ERROR: ' + error.error.message);
      return throwError('Something bad happened; please try again later.');
}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerURL}/api/user/allUsers`)
    .pipe(
        catchError(this.handleError)
    );
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerURL}/api/user/delete/${id}`)
        .pipe(
            catchError(this.handleError)
        );
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerURL}/api/user/update`, user)
    .pipe(
        catchError(this.handleError)
    );
  }

  // public getUserRole(id: number) {
  //   return this.http.get(`${this.apiServerURL}/api/user/getUserRole/${id}`, { responseType:'text' })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }



  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
