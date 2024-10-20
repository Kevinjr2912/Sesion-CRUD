import { Component, Input, OnInit } from '@angular/core';
import { IUserReceive } from '../interfaces/iuser-receive';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-cards-users',
  templateUrl: './list-cards-users.component.html',
  styleUrl: './list-cards-users.component.css'
})
export class ListCardsUsersComponent implements OnInit{
  // Arreglo de objetos que se va a recibir al hacer la petición get
  users: IUserReceive [] = []

  // Input para indicar si se renderiza ciertas acciones
  @Input() flag_list: boolean = true;

  // Inyectando el contructor de nuestro servicio de users
  constructor(private _apiService : UsersService){}

  ngOnInit(): void {
      this.getAllUsers();
  }

  getAllUsers(){
    this._apiService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'A problem ocurred on the serve',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    )
  }

}
