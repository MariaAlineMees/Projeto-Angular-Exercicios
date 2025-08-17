import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Destino {
  cidade: string;
  pais: string;
  categoria: string;
}

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './destinos.html',
  styleUrls: ['./destinos.css']
})
export class Destinos {
  // Filtros separados
  filtroPais = '';
  filtroCidade = '';
  filtroCategoria = '';


destinos: Destino[] = [
  // 🇫🇷 França
  { cidade: 'Paris', pais: 'França', categoria: 'cultural' },
  { cidade: 'Nice', pais: 'França', categoria: 'praia' },
  { cidade: 'Lyon', pais: 'França', categoria: 'gastronômico' },
  { cidade: 'Marselha', pais: 'França', categoria: 'histórico' },
  { cidade: 'Bordeaux', pais: 'França', categoria: 'vinícola' },
  { cidade: 'Toulouse', pais: 'França', categoria: 'urbano' },
  { cidade: 'Strasbourg', pais: 'França', categoria: 'cultural' },
  { cidade: 'Cannes', pais: 'França', categoria: 'luxo' },
  { cidade: 'Lille', pais: 'França', categoria: 'histórico' },
  { cidade: 'Avignon', pais: 'França', categoria: 'romântico' },

  // 🇪🇸 Espanha
  { cidade: 'Barcelona', pais: 'Espanha', categoria: 'praia' },
  { cidade: 'Madrid', pais: 'Espanha', categoria: 'urbano' },
  { cidade: 'Sevilha', pais: 'Espanha', categoria: 'histórico' },
  { cidade: 'Valência', pais: 'Espanha', categoria: 'praia' },
  { cidade: 'Granada', pais: 'Espanha', categoria: 'cultural' },
  { cidade: 'Bilbao', pais: 'Espanha', categoria: 'gastronômico' },
  { cidade: 'Málaga', pais: 'Espanha', categoria: 'praia' },
  { cidade: 'Toledo', pais: 'Espanha', categoria: 'histórico' },
  { cidade: 'Zaragoza', pais: 'Espanha', categoria: 'urbano' },
  { cidade: 'San Sebastián', pais: 'Espanha', categoria: 'praia' },

  // 🇺🇸 Estados Unidos
  { cidade: 'Nova York', pais: 'EUA', categoria: 'urbano' },
  { cidade: 'Los Angeles', pais: 'EUA', categoria: 'praia' },
  { cidade: 'Chicago', pais: 'EUA', categoria: 'cultural' },
  { cidade: 'Miami', pais: 'EUA', categoria: 'praia' },
  { cidade: 'San Francisco', pais: 'EUA', categoria: 'aventura' },
  { cidade: 'Las Vegas', pais: 'EUA', categoria: 'entretenimento' },
  { cidade: 'Orlando', pais: 'EUA', categoria: 'família' },
  { cidade: 'Boston', pais: 'EUA', categoria: 'histórico' },
  { cidade: 'Washington D.C.', pais: 'EUA', categoria: 'político' },
  { cidade: 'Seattle', pais: 'EUA', categoria: 'urbano' },

  // 🇨🇳 China
  { cidade: 'Pequim', pais: 'China', categoria: 'histórico' },
  { cidade: 'Xangai', pais: 'China', categoria: 'urbano' },
  { cidade: 'Xi’an', pais: 'China', categoria: 'cultural' },
  { cidade: 'Chengdu', pais: 'China', categoria: 'gastronômico' },
  { cidade: 'Guilin', pais: 'China', categoria: 'natureza' },
  { cidade: 'Hangzhou', pais: 'China', categoria: 'romântico' },
  { cidade: 'Suzhou', pais: 'China', categoria: 'histórico' },
  { cidade: 'Hong Kong', pais: 'China', categoria: 'urbano' },
  { cidade: 'Macau', pais: 'China', categoria: 'entretenimento' },
  { cidade: 'Kunming', pais: 'China', categoria: 'aventura' },

  // 🇮🇹 Itália
  { cidade: 'Roma', pais: 'Itália', categoria: 'histórico' },
  { cidade: 'Florença', pais: 'Itália', categoria: 'cultural' },
  { cidade: 'Milão', pais: 'Itália', categoria: 'moda' },
  { cidade: 'Veneza', pais: 'Itália', categoria: 'romântico' },
  { cidade: 'Nápoles', pais: 'Itália', categoria: 'gastronômico' },
  { cidade: 'Turim', pais: 'Itália', categoria: 'urbano' },
  { cidade: 'Bolonha', pais: 'Itália', categoria: 'gastronômico' },
  { cidade: 'Gênova', pais: 'Itália', categoria: 'histórico' },
  { cidade: 'Verona', pais: 'Itália', categoria: 'romântico' },
  { cidade: 'Pisa', pais: 'Itália', categoria: 'cultural' },

  // 🇹🇷 Turquia
  { cidade: 'Istambul', pais: 'Turquia', categoria: 'cultural' },
  { cidade: 'Ancara', pais: 'Turquia', categoria: 'urbano' },
  { cidade: 'Antália', pais: 'Turquia', categoria: 'praia' },
  { cidade: 'Izmir', pais: 'Turquia', categoria: 'gastronômico' },
  { cidade: 'Capadócia', pais: 'Turquia', categoria: 'aventura' },
  { cidade: 'Bursa', pais: 'Turquia', categoria: 'histórico' },
  { cidade: 'Konya', pais: 'Turquia', categoria: 'religioso' },
  { cidade: 'Trabzon', pais: 'Turquia', categoria: 'natureza' },
  { cidade: 'Fethiye', pais: 'Turquia', categoria: 'praia' },
  { cidade: 'Pamukkale', pais: 'Turquia', categoria: 'natural' },

  // 🇲🇽 México
  { cidade: 'Cidade do México', pais: 'México', categoria: 'urbano' },
  { cidade: 'Cancún', pais: 'México', categoria: 'praia' },
  { cidade: 'Guadalajara', pais: 'México', categoria: 'cultural' },
  { cidade: 'Monterrey', pais: 'México', categoria: 'urbano' },
  { cidade: 'Tulum', pais: 'México', categoria: 'histórico' },
  { cidade: 'Puebla', pais: 'México', categoria: 'gastronômico' },
  { cidade: 'Oaxaca', pais: 'México', categoria: 'cultural' },
  { cidade: 'San Miguel de Allende', pais: 'México', categoria: 'romântico' },
  { cidade: 'Mérida', pais: 'México', categoria: 'histórico' },
  { cidade: 'Acapulco', pais: 'México', categoria: 'praia' },

  // 🇩🇪 Alemanha
  { cidade: 'Berlim', pais: 'Alemanha', categoria: 'urbano' },
  { cidade: 'Munique', pais: 'Alemanha', categoria: 'cultural' },
  { cidade: 'Frankfurt', pais: 'Alemanha', categoria: 'financeiro' },
  { cidade: 'Hamburgo', pais: 'Alemanha', categoria: 'portuário' },
  { cidade: 'Colônia', pais: 'Alemanha', categoria: 'histórico' },
  { cidade: 'Dresden', pais: 'Alemanha', categoria: 'cultural' },
  { cidade: 'Stuttgart', pais: 'Alemanha', categoria: 'industrial' },
  { cidade: 'Leipzig', pais: 'Alemanha', categoria: 'artístico' },
  { cidade: 'Heidelberg', pais: 'Alemanha', categoria: 'romântico' },
  { cidade: 'Nuremberg', pais: 'Alemanha', categoria: 'histórico' },

  { cidade: 'Bangkok', pais: 'Tailândia', categoria: 'urbano' },
{ cidade: 'Chiang Mai', pais: 'Tailândia', categoria: 'cultural' },
{ cidade: 'Phuket', pais: 'Tailândia', categoria: 'praia' },
{ cidade: 'Krabi', pais: 'Tailândia', categoria: 'aventura' },
{ cidade: 'Pattaya', pais: 'Tailândia', categoria: 'praia' },
{ cidade: 'Ayutthaya', pais: 'Tailândia', categoria: 'histórico' },
{ cidade: 'Ko Samui', pais: 'Tailândia', categoria: 'praia' },
{ cidade: 'Hua Hin', pais: 'Tailândia', categoria: 'romântico' },
{ cidade: 'Sukhothai', pais: 'Tailândia', categoria: 'arqueológico' },
{ cidade: 'Pai', pais: 'Tailândia', categoria: 'natureza' },

{ cidade: 'Londres', pais: 'Reino Unido', categoria: 'urbano' },
{ cidade: 'Edimburgo', pais: 'Reino Unido', categoria: 'histórico' },
{ cidade: 'Manchester', pais: 'Reino Unido', categoria: 'cultural' },
{ cidade: 'Liverpool', pais: 'Reino Unido', categoria: 'musical' },
{ cidade: 'Birmingham', pais: 'Reino Unido', categoria: 'urbano' },
{ cidade: 'Oxford', pais: 'Reino Unido', categoria: 'acadêmico' },
{ cidade: 'Cambridge', pais: 'Reino Unido', categoria: 'acadêmico' },
{ cidade: 'Bath', pais: 'Reino Unido', categoria: 'histórico' },
{ cidade: 'Brighton', pais: 'Reino Unido', categoria: 'praia' },
{ cidade: 'York', pais: 'Reino Unido', categoria: 'medieval' },

{ cidade: 'Rio de Janeiro', pais: 'Brasil', categoria: 'praia' },
{ cidade: 'São Paulo', pais: 'Brasil', categoria: 'urbano' },
{ cidade: 'Salvador', pais: 'Brasil', categoria: 'cultural' },
{ cidade: 'Florianópolis', pais: 'Brasil', categoria: 'praia' },
{ cidade: 'Manaus', pais: 'Brasil', categoria: 'aventura' },

{ cidade: 'Tóquio', pais: 'Japão', categoria: 'urbano' },
{ cidade: 'Kyoto', pais: 'Japão', categoria: 'histórico' },
{ cidade: 'Osaka', pais: 'Japão', categoria: 'gastronômico' },
{ cidade: 'Nara', pais: 'Japão', categoria: 'cultural' },
{ cidade: 'Hiroshima', pais: 'Japão', categoria: 'histórico' },

{ cidade: 'Toronto', pais: 'Canadá', categoria: 'urbano' },
{ cidade: 'Vancouver', pais: 'Canadá', categoria: 'natureza' },
{ cidade: 'Montreal', pais: 'Canadá', categoria: 'cultural' },
{ cidade: 'Quebec', pais: 'Canadá', categoria: 'histórico' },
{ cidade: 'Ottawa', pais: 'Canadá', categoria: 'político' },

{ cidade: 'Atenas', pais: 'Grécia', categoria: 'histórico' },
{ cidade: 'Santorini', pais: 'Grécia', categoria: 'romântico' },
{ cidade: 'Mykonos', pais: 'Grécia', categoria: 'praia' },
{ cidade: 'Thessaloniki', pais: 'Grécia', categoria: 'urbano' },
{ cidade: 'Delphi', pais: 'Grécia', categoria: 'arqueológico' },

{ cidade: 'Lisboa', pais: 'Portugal', categoria: 'cultural' },
{ cidade: 'Porto', pais: 'Portugal', categoria: 'gastronômico' },
{ cidade: 'Faro', pais: 'Portugal', categoria: 'praia' },
{ cidade: 'Coimbra', pais: 'Portugal', categoria: 'acadêmico' },
{ cidade: 'Évora', pais: 'Portugal', categoria: 'histórico' },

{ cidade: 'Cairo', pais: 'Egito', categoria: 'histórico' },
{ cidade: 'Luxor', pais: 'Egito', categoria: 'arqueológico' },
{ cidade: 'Aswan', pais: 'Egito', categoria: 'cultural' },
{ cidade: 'Alexandria', pais: 'Egito', categoria: 'praia' },
{ cidade: 'Sharm El Sheikh', pais: 'Egito', categoria: 'resort' },

{ cidade: 'Nova Délhi', pais: 'Índia', categoria: 'urbano' },
{ cidade: 'Mumbai', pais: 'Índia', categoria: 'financeiro' },
{ cidade: 'Jaipur', pais: 'Índia', categoria: 'histórico' },
{ cidade: 'Agra', pais: 'Índia', categoria: 'monumento' },
{ cidade: 'Varanasi', pais: 'Índia', categoria: 'espiritual' },

{ cidade: 'Jacarta', pais: 'Indonésia', categoria: 'urbano' },
{ cidade: 'Bali', pais: 'Indonésia', categoria: 'praia' },
{ cidade: 'Yogyakarta', pais: 'Indonésia', categoria: 'cultural' },
{ cidade: 'Surabaya', pais: 'Indonésia', categoria: 'urbano' },
{ cidade: 'Bandung', pais: 'Indonésia', categoria: 'gastronômico' },

{ cidade: 'Dubai', pais: 'Emirados Árabes Unidos', categoria: 'luxo' },
{ cidade: 'Abu Dhabi', pais: 'Emirados Árabes Unidos', categoria: 'cultural' },
{ cidade: 'Sharjah', pais: 'Emirados Árabes Unidos', categoria: 'histórico' },
{ cidade: 'Ajman', pais: 'Emirados Árabes Unidos', categoria: 'praia' },
{ cidade: 'Fujairah', pais: 'Emirados Árabes Unidos', categoria: 'natureza' },

{ cidade: 'Valletta', pais: 'Malta', categoria: 'histórico' },
{ cidade: 'Mdina', pais: 'Malta', categoria: 'medieval' },
{ cidade: 'Sliema', pais: 'Malta', categoria: 'praia' },
{ cidade: 'St. Julian’s', pais: 'Malta', categoria: 'vida noturna' },
{ cidade: 'Marsaxlokk', pais: 'Malta', categoria: 'pesqueiro' },

{ cidade: 'Londres', pais: 'Inglaterra', categoria: 'urbano' },
{ cidade: 'Manchester', pais: 'Inglaterra', categoria: 'cultural' },
{ cidade: 'Liverpool', pais: 'Inglaterra', categoria: 'musical' },
{ cidade: 'Bath', pais: 'Inglaterra', categoria: 'histórico' },
{ cidade: 'Brighton', pais: 'Inglaterra', categoria: 'praia' },
  ];

listaInteresse: Destino[] = [];

  get destinosFiltrados(): Destino[] {
    const pais = this.filtroPais.trim().toLowerCase();
    const cidade = this.filtroCidade.trim().toLowerCase();
    const categoria = this.filtroCategoria.trim().toLowerCase();

    return this.destinos.filter(destino =>
      (pais ? destino.pais.toLowerCase().includes(pais) : true) &&
      (cidade ? destino.cidade.toLowerCase().includes(cidade) : true) &&
      (categoria ? destino.categoria.toLowerCase().includes(categoria) : true)
    );
  }

  adicionarInteresse(destino: Destino): void {
    const jaExiste = this.listaInteresse.some(d =>
      d.cidade === destino.cidade && d.pais === destino.pais
    );
    if (!jaExiste) {
      this.listaInteresse.push(destino);
    }
  }

  removerInteresse(destino: Destino): void {
    this.listaInteresse = this.listaInteresse.filter(d =>
      d.cidade !== destino.cidade || d.pais !== destino.pais
    );
  }
}
