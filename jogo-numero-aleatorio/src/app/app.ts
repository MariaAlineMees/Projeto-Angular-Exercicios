import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jogo } from "./jogo/jogo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Jogo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('jogo-numero-aleatorio');
}