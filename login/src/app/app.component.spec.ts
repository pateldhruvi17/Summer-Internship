
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  email = '';
  password = '';
  isDisabled = false;

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.isDisabled = true; 
  }

  Login() {
    this.isDisabled = false; 
  }
  

}

