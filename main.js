
function pessoa(nome,idade,genero,nacionalidade) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.nacionalidade = nacionalidade;
    
}




const andre = new pessoa ("andre","25","masculino","brasileiro");
const clara = new pessoa ("clara","19","feminino","brasileira");

console.log(andre);
console.log(clara);

const name = "rafael"
const altura = "1,75"
const hobbies = ["correr","filmes","jogos"]
const brasileiro = true


const rafael = {
    name: name,
    altura: altura,
    hobbies: hobbies,
    brasileiro: brasileiro
    
}

console.log(rafael);