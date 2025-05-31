import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GCET Hello';
  invisible = false;
  items = ['Item1', 'Item2', 'Item3'];
  inputValue = 'Dhruvi';

  listenClick() {
    this.invisible = !this.invisible;
  }
}
