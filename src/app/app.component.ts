import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sketch app';
  showHeader:boolean=true;
  constructor(private router : Router){}
  ngOnInit(): void {
    const dontShowHeader:string[] = ['login','inscription']
    this.router.events.subscribe({
      next:(res:any)=>{
        this.showHeader = !dontShowHeader.reduce((a:any,b:any)=>location.pathname.includes(b) || a,false)
      }
    })
  }
}
