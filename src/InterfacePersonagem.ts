export interface Personagem {
  nome: string;
  forca: number;
  inteligencia: number;
  destreza: number;

  atacar(): void;
  defender(): void;
}
