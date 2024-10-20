import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceUserService } from '../services/service-user.service';
import { IUserCreate } from '../interfaces/iuser-create';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  // Ouputs
  @Output() emitter = new EventEmitter<boolean>();

  // Variables u objetos
  flag: boolean = false;

  userCreate: IUserCreate = {
    name_user: '',
    email_user: '',
    password_user: '',
  };

  // Inyectamos al contructor de nuestro servicio a usar
  constructor(private _apiService: ServiceUserService) {}

  // Función emite el nuevo valor de bandera (flag)
  emitFlag() {
    this.emitter.emit(!this.flag);
  }

  // Función para registrar un usuario
  registerUser() {
    if (
      !this.userCreate.name_user ||
      !this.userCreate.email_user ||
      !this.userCreate.password_user
    ) {
      Swal.fire({
        text: 'No pueden quedar campos vacíos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    } else {
      this._apiService.createUser(this.userCreate).subscribe(
        (response) => {
          Swal.fire({
            title: 'Buen trabajo',
            text: 'Te haz registrado correctamente dentro del sistema',
            icon: 'success',
          });
        },
        (error) => {
          const { message } = error.error;
          const { status } = error;

          if (status === 409) {
            Swal.fire({
              text: message,
              icon: 'error',
              confirmButtonText: 'Aceptar',
            });

            // Vaciamos los campos correspondientes
            this.userCreate.name_user = '';
            this.userCreate.email_user = '';
            this.userCreate.password_user = '';

          } else {
            Swal.fire({
              title: 'Error',
              text: 'A problem occurred on the server',
              icon: 'error',
              confirmButtonText: 'Aceptar',
            });
          }
        }
      );
    }
  }
}
