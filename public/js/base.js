const nome = "Marcelo Eltz";
let nome2 = "Marcelo Eltz"
let pessoaDefault = {
    nome:     "Marcelo Eltz",
    idade:    "33",
    trabalho: "Programador"
}

let nomes=["Marcelo", "Maria", "Joao"]

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado")
    console.log(nome2);
}
function recebeEalteraNome(novoMome) {
    nome2 = "Maria Silva"
    console.log("Valor alterado recebendo um nome")
    console.log(nome2);
}

console.log(nomes[[0]])
//recebeEalteraNome("Joao Silva Pereira")

function imprimirPessoa(pessoa) {
console.log("Nome")
console.log(pessoa.nome)

console.log("Idade")
console.log(pessoa.idade)

console.log("Trabalho")
console.log(pessoa.trabalho)
}

//imprimirPessoa(pessoaDefault)

//imprimirPessoa({
//    nome:     "Maria Silva",
//    idade:    "25",
//    trabalho: "UX/UI Design"
//})

//alterarNome();