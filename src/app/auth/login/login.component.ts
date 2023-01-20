import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `,
  ],
})
export class LoginComponent {
  username: any;
  password: any;
  constructor(private http: HttpService, private router: Router) {}
  login() {
    this.http
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('access', res.access);
          localStorage.setItem('refresh', res.refresh);
          this.router.navigateByUrl('/home');
        },
        error: (err: any) => {},
      });
  }
}
