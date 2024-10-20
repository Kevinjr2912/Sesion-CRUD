import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserCreate } from '../interfaces/iuser-create';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public createUser (user: IUserCreate): Observable <void> {
    return this.http.post<void> (`${this.url}/createUser`, user);
  } 

  public authUser (user: any): Observable <void> {
    return this.http.post<void> (`${this.url}/authUser`, user);
  }
}
