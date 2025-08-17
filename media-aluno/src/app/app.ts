import { Component } from '@angular/core';
import { AlunoComponent } from './aluno/aluno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlunoComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}