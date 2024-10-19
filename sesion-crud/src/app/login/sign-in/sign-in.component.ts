import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() emitter = new EventEmitter<boolean>();
  flag: boolean = false;

  emitFlag(){
    this.emitter.emit(!this.flag);
  }
}
