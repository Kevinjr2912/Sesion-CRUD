import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformationUserComponent } from './card-information-user/card-information-user.component';
import { ListCardsUsersComponent } from './list-cards-users/list-cards-users.component';

@NgModule({
  declarations: [
    CardInformationUserComponent,
    ListCardsUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardInformationUserComponent
  ]
})
export class UserModule { }
