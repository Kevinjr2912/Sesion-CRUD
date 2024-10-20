import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-information-user',
  templateUrl: './card-information-user.component.html',
  styleUrl: './card-information-user.component.css'
})
export class CardInformationUserComponent {
  // Inputs para redenrizar la información de un usuario
  @Input() id_user: number = 0;
  @Input() name_user: string = '';
  @Input() email_user: string = '';
  @Input() password_user: string = '';
  
  // Input para renderizar las acciones
  @Input() flag: boolean = false;

}
