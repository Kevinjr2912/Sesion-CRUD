import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateUserInformationComponent } from './user/form-update-user-information/form-update-user-information.component';
import { ListCardsUsersComponent } from './user/list-cards-users/list-cards-users.component';

const routes: Routes = [
  { path:'seeUsers', component: ListCardsUsersComponent },
  { path:'seeInformationUserToUpdate/:id_user', component: FormUpdateUserInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
