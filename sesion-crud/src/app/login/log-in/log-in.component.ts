import { Component } from '@angular/core';
import { IAuthUser } from '../interfaces/iauth-user';
import { ServiceUserService } from '../services/service-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  // Objeto que se va a mandar dentro de nuestra petición post para saber si es un usuario dentro del sistema
  authUser: IAuthUser = {
    email_user: '',
    password_user: ''
  }

  // Inyectamos el contructor de nuestro servicio User
  constructor(private _apiUser: ServiceUserService){}

  logIn(){
    this._apiUser.authUser(this.authUser).subscribe(
      (response) => {
        Swal.fire({
          title: 'Access granted',
          icon: 'success',
        });
      },
      (error) => {
        const { message } = error.error;
        const { status } = error;

        if (status === 401) {
          Swal.fire({
            text: message,
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });

          // Vaciamos los campos correspondientes
          this.authUser.email_user = '';
          this.authUser.password_user = '';
          
        } else {
          Swal.fire({
            title: 'Error',
            text: 'A problem ocurred on the serve',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      }
    )  
  }
  
}
