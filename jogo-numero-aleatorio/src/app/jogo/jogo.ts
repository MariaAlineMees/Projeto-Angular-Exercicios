import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jogo.html',
  styleUrls: ['./jogo.css']
})
export class Jogo {
  numeroSecreto = this.gerarNumero();
  tentativa!: number;
  dica = '';
  acertou = false;
  tentativas = 0;

  gerarNumero(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  verificar() {
    this.tentativas++;

    const diferenca = Math.abs(this.tentativa - this.numeroSecreto);

    if (this.tentativa === this.numeroSecreto) {
      this.acertou = true;
      this.dica = `🎉 Parabéns! Você acertou em ${this.tentativas} tentativa(s)!`;
    } else if (diferenca <= 5) {
      this.dica = 'Quase!';
    } else if (diferenca <= 10) {
      this.dica = 'Perto!';
    } else if (diferenca <= 20) {
      this.dica = 'Longe!';
    } else {
      this.dica = 'Muito longe!';
    }
  }

  reiniciar() {
    this.numeroSecreto = this.gerarNumero();
    this.tentativa = 0;
    this.dica = '';
    this.acertou = false;
    this.tentativas = 0;
  }
}