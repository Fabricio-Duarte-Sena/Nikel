const nome = "feiosoMofiros";
let nome2 = "";
let pessoaDefault = {
    nome: "Feioso",
    idade: "4",
    mae: "Mofiras"
}

let nomes = ["Feioso, Mofiros, Mofiras"];

let pessoas = [
    {
        nome: "Feioso",
        idade: "4",
        mae: "Mofiras"
    },
    {
        nome: "Mofiras",
        idade: "16",
        mae: "Ellen"
    }
];

function alteraNome() {
    nome2 = "Mofiras";
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function recebeEalternaNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("nome");
    console.log(pessoa.nome);

    console.log("idade");
    console.log(pessoa.idade);

    console.log("mae");
    console.log(pessoa.mae);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);

}

function imprimirPessoa(){
    console.log("----------IMPRIMIR PESSOAS-----------")
    pessoas.forEach((item) =>{
        console.log("nome:");
        console.log(item.nome);
    
        console.log("idade");
        console.log(item.idade);
    
        console.log("mae");
        console.log(item.mae);

    })
}

adicionarPessoa({
    nome: "Fafsbricio",
    idade: "22",
    mae: "Ellen"
});

imprimirPessoa();

console.log(pessoas);