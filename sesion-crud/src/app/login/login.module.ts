import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignInComponent,
  ]
})
export class LoginModule { }
