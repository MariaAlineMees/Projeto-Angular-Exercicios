import { Component } from '@angular/core';
import { Destinos } from './destinos/destinos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Destinos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}