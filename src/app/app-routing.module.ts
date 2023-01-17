import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate:[]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
