import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformationUserComponent } from './card-information-user/card-information-user.component';
import { ListCardsUsersComponent } from './list-cards-users/list-cards-users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormUpdateUserInformationComponent } from './form-update-user-information/form-update-user-information.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CardInformationUserComponent,
    ListCardsUsersComponent,
    FormUpdateUserInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CardInformationUserComponent,
    ListCardsUsersComponent
  ]
})
export class UserModule { }
