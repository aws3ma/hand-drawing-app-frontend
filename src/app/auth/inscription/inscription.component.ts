import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  username: any;
  password: any;
  firstName: any;
  lastName: any;
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('firstname')?.click();
    }, 100);
  }
  inscription() {
    this.http
      .signup({
        username: this.username,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
      })
      .subscribe({
        next: (res: any) => {
          this.login();
        },
        error: (err: any) => {},
      });
  }
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
