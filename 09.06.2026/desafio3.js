// 1. Adicione Pernalonga somente se não for o primeiro elemento já existente. 
const grupo = ["Gaguinho", "piu-piu", "Lola Bunny"];

if (grupo.length === 0 || grupo[0] !== "Pernalonga") {
    grupo.unshift("Pernalonga");
}
console.log(grupo);

// 2. Adicione o Patolino, mas coloque ele no início da lista se ainda não houver aves.
if (!grupo.some(membro => membro.toUpperCase().includes("AVE"))) {
    grupo.unshift("Patolino");
}
console.log(grupo); 
// 3. Remova Patolino apenas se ele estiver após o segundo índice. 
const indicePatolino = grupo.indexOf("Patolino");
if (indicePatolino > 2) {
    grupo.splice(indicePatolino, 1);
}
console.log(grupo);
// 4. Adicione Frajola somente se já existir pelo menos 2 integrantes. 
if (grupo.length >= 2) {
    grupo.push("Frajola");
}
console.log(grupo);
// 5. Filtre personagens cujo nome começa com “P” e termina com vogal. 
