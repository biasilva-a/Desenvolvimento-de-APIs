
//1. Crie uma variável para salvar um conjunto de personagens na equipe.
   const equipe = [ "Pernalonga", "Gaguinho" ];
   console.log(equipe);

 //2. Adicione o Patolino a equipe somente se a equipe tiver menos de 3 membros, e se ele ainda não estiver na equipe.
    {
        equipe.push("Patolino");
   }
    console.log(equipe);

    
//3. Organize a equipe em ordem alfabética.
   equipe.sort();
    console.log(equipe);

//4. Coloque o personagem como líder (primeira posição).
const indice = equipe.indexOf("Patolino");
if (indice !== -1) {
  equipe.splice(indice, 1);
  equipe.unshift("Patolino");
}
console.log(equipe);

// 5. Adicione o Frajola, somente se nenhum nome começar com “F” ainda.]
const personagens = ["Pernalonga", "Gaguinho", "Patolino"];
const novaPessoa2 = 'Frajola';
if (!personagens.some(personagem => personagem.toUpperCase().startsWith('F'))) {
    personagens.unshift(novaPessoa2);
}

console.log(personagens); 