import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conversor.html',
  styleUrls: ['./conversor.css']
})
export class Conversor {
  valor: number = 0;
  moeda: string = '';
  resultado: number | null = null;

  taxas: { [key: string]: number } = {
    bitcoin: 0.000021,
    dolar: 0.20,
    euro: 0.18,
    ethereum: 0.00032,
    libra: 0.16,
    iene: 29.50
  };

  converter() {
    if (!this.moeda || this.valor <= 0) {
      alert('Informe um valor válido e selecione uma moeda.');
      return;
    }

    this.resultado = this.valor * this.taxas[this.moeda];
  }
}