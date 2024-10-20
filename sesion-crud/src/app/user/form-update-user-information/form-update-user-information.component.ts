import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { IInformationUser } from '../interfaces/iinformation-user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-update-user-information',
  templateUrl: './form-update-user-information.component.html',
  styleUrl: './form-update-user-information.component.css',
})
export class FormUpdateUserInformationComponent implements OnInit {
  id_user: number = 0;

  informationUser: IInformationUser = {
    name_user: '',
    email_user: '',
    password_user: '',
  };

  constructor(
    private _apiService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_user = Number(this.route.snapshot.paramMap.get('id_user'));

    this.getInformationUser(this.id_user);
  }

  getInformationUser(id_user: number): void {
    this._apiService.getInformationUser(id_user).subscribe(
      (response) => {
        this.informationUser = response;
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'A problem ocurred on the serve',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }

  updateInformation(): void {
    this._apiService
      .updateInformation(this.id_user, this.informationUser)
      .subscribe(
        (response) => {
          Swal.fire({
            title: 'User updated successfully',
            icon: 'success',
          }).then(() => {
            this.router.navigate(['seeUsers']);
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'A problem ocurred on the serve',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      );
  }

  redirectListUsers(): void {
    this.router.navigate(['seeUsers']);
  }
}
