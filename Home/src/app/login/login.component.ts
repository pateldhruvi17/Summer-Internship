import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Simple validation - in real app, add authentication logic here
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Please enter email and password');
    }
  }
}