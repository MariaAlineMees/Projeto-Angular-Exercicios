import { Component } from '@angular/core';
import { Imc } from './imc/imc';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Imc, FormsModule],
  templateUrl: './app.html',
})
export class AppComponent {}
