import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  PrimeNGConfig,
  MessageService,
} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ConfirmationService],
})
export class HeaderComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService
  ) {}
  items: MenuItem[] = [];
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Upload File',
        icon: 'pi pi-cloud-upload',
        routerLink: '/home',
      },
      {
        label: 'History',
        icon: 'pi pi-history',
        routerLink: '/history',
      },
    ];
  }
  logout(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to Logout?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.router.navigate(['login']);
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Canceled',
          detail: 'You have not been logged out',
          life: 1000,
        });
      },
    });
  }
}
