import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: LoginComponent },
        { path: 'home', component: HomeComponent }
      ]),
      FormsModule
    )
  ]
});
