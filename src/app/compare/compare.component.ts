import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';

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
  constructor(private http: HttpService, private router: Router) {}
  ngOnInit(): void {
    this.http.getImage(localStorage.getItem('id')).subscribe({
      next: (res: any) => {
        this.data = res;
        this.basicDataOriginal = {
          labels: res.original.histogram.labels,
          datasets: [
            {
              label: 'Original image Histogram',
              backgroundColor: '#42A5F5',
              data: res.original.histogram.data,
            },
          ],
        };
        this.basicDataSketch = {
          labels: res.sketch.histogram.labels,
          datasets: [
            {
              label: 'Sketch image Histogram',
              backgroundColor: '#FFA726',
              data: res.sketch.histogram.data,
            },
          ],
        };
      },
      error: (err: any) => {},
    });
  }
}
