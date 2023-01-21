import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HttpService } from './services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpService, private router: Router) {}
  loggedIn(): boolean {
    let test = true;
    if (localStorage.getItem('access')) {
      this.http
        .verifyToken({ token: localStorage.getItem('access') })
        .subscribe({
          error: (err) => {
            if (localStorage.getItem('refresh')) {
              this.http
                .refreshToken({
                  refresh: localStorage.getItem('refresh'),
                })
                .subscribe({
                  next: (res: any) => {
                    localStorage.setItem('access', res.access);
                    localStorage.setItem('refresh', res.refresh);
                  },
                  error: (err: any) => {
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    test = false;
                  },
                });
            }
            if (!localStorage.getItem('refresh')) {
              test = false;
            }
          },
        });
    }
    if (!localStorage.getItem('access')) {
      if (localStorage.getItem('refresh')) {
        this.http
          .refreshToken({
            refresh: localStorage.getItem('refresh'),
          })
          .subscribe({
            next: (res: any) => {
              localStorage.setItem('access', res.access);
              localStorage.setItem('refresh', res.refresh);
            },
            error: (err: any) => {
              localStorage.removeItem('access');
              localStorage.removeItem('refresh');
              test = false;
            },
          });
      }
      if (!localStorage.getItem('refresh')) {
        test = false;
      }
    }
    return test;
  }
  canActivate(): boolean {
    if (this.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
