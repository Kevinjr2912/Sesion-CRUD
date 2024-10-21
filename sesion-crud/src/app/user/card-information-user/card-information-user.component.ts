import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-information-user',
  templateUrl: './card-information-user.component.html',
  styleUrl: './card-information-user.component.css',
})
export class CardInformationUserComponent {
  // Inputs para redenrizar la información de un usuario
  @Input() id_user: number = 0;
  @Input() name_user: string = '';
  @Input() email_user: string = '';
  @Input() password_user: string = '';

  // Input para renderizar las acciones
  @Input() flag: boolean = false;

  constructor(private router: Router) {}

  redirectEdit(): void {
    this.router.navigate(['seeInformationUserToUpdate', this.id_user]);
  }

  deleteUser(): void {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "Remember ypu can´t reverse this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#308 5d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "User deleted",
          icon: "success"
        });
      }
    });
  }
}
