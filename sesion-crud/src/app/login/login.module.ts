import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ViewMainUserComponent } from './view-main-user/view-main-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent,
    ViewMainUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    SignInComponent,
    LogInComponent,
    ViewMainUserComponent
  ]
})

export class LoginModule { }
