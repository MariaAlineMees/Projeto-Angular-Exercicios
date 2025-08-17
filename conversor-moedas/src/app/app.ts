import { Component, signal } from '@angular/core';
import { Conversor } from './conversor/conversor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Conversor, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conversor-moedas');
}