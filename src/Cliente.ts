import { PersonagemFactory } from './PersonagemFactory';

function clienteRPG() {
  const personagem1 = PersonagemFactory.criarPersonagem("guerreiro", "Arthur");
  const personagem2 = PersonagemFactory.criarPersonagem("mago", "Merlin");
  const personagem3 = PersonagemFactory.criarPersonagem("arqueiro", "Legolas");

  personagem1.atacar();  
  personagem2.defender(); 
  personagem3.atacar();
}

clienteRPG();
