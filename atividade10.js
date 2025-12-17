const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function programa() {
    rl.question("Digite uma lista de números, separando eles por um espaço: ", (resposta) => {
        let numeros = resposta.trim().split(" ").map(Number)
        ordenacao(numeros)
    })
}
function ordenacao(numeros) {
    let pares = []
    let impares = []

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
        else {
            impares.push(numeros[i])
        }
    }

    let listafinal = pares.concat(impares)
    console.log("Sua lista ordenada ficou: ", listafinal)
    rl.close()
}
programa()
