import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public createUser (user: any): Observable <any> {
    return this.http.post<any>(`${this.url}/createUser`, user);
  } 
}
