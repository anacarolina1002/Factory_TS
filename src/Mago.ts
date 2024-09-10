import { Personagem } from "./InterfacePersonagem";

// Classe Mago
export default class Mago implements Personagem {
    nome: string;
    forca: number;
    inteligencia: number;
    destreza: number;
  
    constructor(nome: string) {
      this.nome = nome;
      this.forca = 20;
      this.inteligencia = 90;
      this.destreza = 40;
    }
  
    atacar(): void {
      console.log(`${this.nome} lança uma bola de fogo!`);
    }
  
    defender(): void {
      console.log(`${this.nome} usa um escudo mágico!`);
    }
  }