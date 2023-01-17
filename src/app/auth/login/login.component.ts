import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class LoginComponent {
  username:any;
  password:any;
}
