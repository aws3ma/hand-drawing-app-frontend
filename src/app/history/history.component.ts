import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1920px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  progress:number =0
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    this.http.getImage('all').subscribe({
      next: (res: any) => {
        if (res.type === HttpEventType.DownloadProgress) {
          this.progress = Math.round(100 * res.loaded / res.total);
        }
        if (res instanceof HttpResponse){

          this.images = res.body.original;
        }
      },
      error: (err: any) => {},
    });
  }
  test(event: any) {
    localStorage.setItem('id', event.target.id);
    this.router.navigateByUrl('sketch');
  }
}
