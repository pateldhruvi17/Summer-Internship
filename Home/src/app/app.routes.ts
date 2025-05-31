// import { Routes } from '@angular/router';

// export const routes: Routes = [];
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'home', component: HomeComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];
