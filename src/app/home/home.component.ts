import { Component } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  image: any;

  constructor(private http: HttpService, private router: Router) {}
  onFileSelected(event: any) {
    this.image = event.files[0];
    const data = new FormData();
    data.append('image', this.image);
    this.http.createImage(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('id', res.id);
        this.router.navigateByUrl('sketch');
      },
      error: (err: any) => {},
    });
  }
}
