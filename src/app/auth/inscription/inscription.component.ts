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
  password: string="";
  firstName: any;
  lastName: any;
  regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('access')) {
      this.router.navigateByUrl('/home');
    }
  }
  inscription() {
    if(!this.username){
      return
    }
    if(!this.password){
      return
    }
    if(this.password){
      if(!this.regex.test(this.password))
        return
    }
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
        error: (err: any) => {
          console.log(err);
        },
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
  toLogin() {
    this.router.navigateByUrl('/login');
  }
}
