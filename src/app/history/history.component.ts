import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';

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
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    this.http.getImage('all').subscribe({
      next: (res: any) => {
        this.images = res.original;
      },
      error: (err: any) => {},
    });
  }
  test(event: any) {
    localStorage.setItem('id', event.target.id);
    this.router.navigateByUrl('sketch');
  }
}
