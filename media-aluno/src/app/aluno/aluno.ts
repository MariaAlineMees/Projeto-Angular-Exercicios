import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './aluno.html',
  styleUrls: ['./aluno.css']
})
export class AlunoComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  media: number | null = null;
  situacao: string = '';
  aprovados: number = 0;
  reprovados: number = 0;

  calcularMedia() {
    const notas = [this.nota1, this.nota2, this.nota3];
    if (notas.some(n => n < 0 || n > 10)) {
      alert('As notas devem estar entre 0 e 10.');
      return;
    }

    this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
    if (this.media >= 7) {
      this.situacao = 'Aprovado';
      this.aprovados++;
    } else {
      this.situacao = 'Reprovado';
      this.reprovados++;
    }
  }
}