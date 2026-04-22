import { Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {ListComponent} from './pages/students/list/list.component';
import {CreateComponent} from './pages/students/create/create.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DetailComponent} from './pages/students/detail/detail.component';
import {EditComponent} from './pages/students/edit/edit.component';
import {authGuard} from './core/guards/auth.guard';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [authGuard]
  }        
];