import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  data: any;
  basicDataOriginal: any;
  basicDataSketch: any;
  basicOptions: any;
  progress: number = 0;
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    this.http.getImage(localStorage.getItem('id')).subscribe({
      next: (res: any) => {
        if (res.type === HttpEventType.DownloadProgress) {
          this.progress = Math.round((100 * res.loaded) / res.total);
        }
        if (res instanceof HttpResponse) {
          this.data = res.body;
          console.log(res.body);

          this.basicDataOriginal = {
            labels: res.body.original.histogram.labels,
            datasets: [
              {
                label: 'Original image Histogram',
                backgroundColor: '#42A5F5',
                data: res.body.original.histogram.data,
              },
            ],
          };
          this.basicDataSketch = {
            labels: res.body.sketch.histogram.labels,
            datasets: [
              {
                label: 'Sketch image Histogram',
                backgroundColor: '#FFA726',
                data: res.body.sketch.histogram.data,
              },
            ],
          };
        }
      },
      error: (err: any) => {},
    });
  }
}
