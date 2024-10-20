import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserReceive } from '../interfaces/iuser-receive';
import { Observable } from 'rxjs';
import { IInformationUser } from '../interfaces/iinformation-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Función para obtener todos los usuarios registrados en el sistema
  public getAllUsers(): Observable<IUserReceive[]> {
    return this.http.get<IUserReceive[]> (`${this.url}/getAllUsers`, {});
  }

  // Función para obtener la información de un usuario
  public getInformationUser(id_user: number): Observable<IInformationUser> {
    return this.http.post<IInformationUser> (`${this.url}/informationUser/${id_user}`, {});
  }

}
