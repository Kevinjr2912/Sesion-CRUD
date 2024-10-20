import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceUserService } from '../services/service-user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() emitter = new EventEmitter<boolean>();
  flag: boolean = false;
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(_apiService: ServiceUserService){}

  emitFlag(){
    this.emitter.emit(!this.flag);
  }

  registerUser(){

  }

}
