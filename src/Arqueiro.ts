import { Personagem } from "./InterfacePersonagem";

// Classe Arqueiro
export default class Arqueiro implements Personagem {
    nome: string;
    forca: number;
    inteligencia: number;
    destreza: number;
  
    constructor(nome: string) {
      this.nome = nome;
      this.forca = 40;
      this.inteligencia = 50;
      this.destreza = 80;
    }
  
    atacar(): void {
      console.log(`${this.nome} atira uma flecha!`);
    }
  
    defender(): void {
      console.log(`${this.nome} esquiva rapidamente!`);
    }
  }