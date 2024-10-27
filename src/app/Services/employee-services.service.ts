import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emoployee } from '../interfaces/emoployee';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServicesService {
  url = '/assets/employee.json';
  constructor(private _http: HttpClient) {}
  getAllEmployee() {
    return this._http.get<Emoployee[]>(this.url).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
