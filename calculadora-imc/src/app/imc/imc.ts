import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './imc.html',
  styleUrls: ['./imc.css']
})
export class Imc {
  peso: number = 0;
  altura: number = 0;

  get imc(): number {
    const alturaMetros = this.altura / 100;
    return this.peso / (alturaMetros * alturaMetros);
  }

  get classificacao(): string {
    const valor = this.imc;
    if (valor < 18.5) return 'Abaixo do peso';
    if (valor < 25) return 'Peso normal';
    if (valor < 30) return 'Sobrepeso';
    return 'Obesidade';
  }
}