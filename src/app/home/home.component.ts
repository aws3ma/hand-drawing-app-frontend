import { Component } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  image: any;
  progress:number=0
  constructor(private http: HttpService, private router: Router) {}
  onFileSelected(event: any) {
    this.image = event.files[0];
    const data = new FormData();
    data.append('image', this.image);
    this.http.createImage(data).subscribe({
      next: (res: any) => {
        if (res.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * res.loaded / res.total);
        }
        if (res instanceof HttpResponse){
          localStorage.setItem('id', res.body.id);
          this.router.navigateByUrl('sketch');
        }
      },
      error: (err: any) => {},

    });
  }
}
