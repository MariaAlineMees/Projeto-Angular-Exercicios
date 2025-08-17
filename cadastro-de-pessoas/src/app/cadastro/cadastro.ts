import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  imports: [FormsModule, CommonModule] 
})
export class Cadastro {
  nome: string = '';
  idade: number | null = null;
  pessoas: { nome: string; idade: number }[] = [];

  adicionarPessoa() {
    if (this.nome && this.idade !== null) {
      this.pessoas.push({ nome: this.nome, idade: this.idade });
      this.nome = '';
      this.idade = null;
    }
  }

  removerPessoa(index: number) {
    this.pessoas.splice(index, 1);
  }

  get maioresDeIdade(): number {
    return this.pessoas.filter(p => p.idade >= 18).length;
  }

  get menoresDeIdade(): number {
    return this.pessoas.filter(p => p.idade < 18).length;
  }
}