import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ViewMainUserComponent } from './view-main-user/view-main-user.component';

@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent,
    ViewMainUserComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    SignInComponent,
    LogInComponent
  ]
})

export class LoginModule { }
