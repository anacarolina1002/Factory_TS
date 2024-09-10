import { Personagem } from "./InterfacePersonagem";
import Arqueiro from "./Arqueiro";
import Guerreiro from "./Guerreiro";
import Mago from "./Mago";

export class PersonagemFactory {
  static criarPersonagem(tipo: string, nome: string): Personagem {
    switch (tipo.toLowerCase()) {
      case "guerreiro":
        return new Guerreiro(nome);
      case "mago":
        return new Mago(nome);
      case "arqueiro":
        return new Arqueiro(nome);
      default:
        throw new Error("Tipo de personagem desconhecido.");
    }
  }
}
