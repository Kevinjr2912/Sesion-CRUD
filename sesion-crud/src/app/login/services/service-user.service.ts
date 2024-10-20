import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserCreate } from '../interfaces/iuser-create';
import { IAuthUser } from '../interfaces/iauth-user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Función  que crea un nuevo usuario dentro del sistema mediante una petición post
  public createUser (user: IUserCreate): Observable <void> {
    return this.http.post<void> (`${this.url}/createUser`, user);
  } 

  // Función que autentica a una persona como usuario dentro del sistema
  public authUser (user: IAuthUser): Observable <void> {
    return this.http.post<void> (`${this.url}/authUser`, user);
  }

}
