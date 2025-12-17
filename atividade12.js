const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
let usuario = {
    nome: "Victor",
    idade: 14, 
    curso: "Engenharia de software",
    media: 9.7
}
function programa() {
    console.log("Digite alguma chave (nome, idade, curso ou media) para verificar se existe no objeto. ")
    rl.question("Digite a sua resposta: ", resposta)
}
function resposta() {
    let chavebuscada = resposta.trim()

    if (chavebuscada in usuario) {
        console.log("A chave que você buscou existe no objeto do usuário!")
    }
    else {
        console.log("A chave buscada não existe no objeto do usuário!")
    }
    rl.close()
}
programa()