import { Personagem } from "./InterfacePersonagem";

export default class Guerreiro implements Personagem {
  nome: string;
  forca: number;
  inteligencia: number;
  destreza: number;

  constructor(nome: string) {
    this.nome = nome;
    this.forca = 80;
    this.inteligencia = 30;
    this.destreza = 50;
  }

  atacar(): void {
    console.log(`${this.nome} ataca com uma espada!`);
  }

  defender(): void {
    console.log(`${this.nome} defende com um escudo!`);
  }
}
