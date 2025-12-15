let numeros = []

function programa() {
    process.stdout.write("Digite um número (ou 'terminei' para sair): ")

    process.stdin.once("data", (data) => {
        let resposta = data.toString().trim()

        if (resposta.toLowerCase() === "terminei") {
            if (numeros.length === 0) {
                console.log("Nenhum número foi digitado.")
                return programa()
            } 
            else {
                let maior = Math.max(...numeros)
                console.log("O maior número, entre todos os que você digitou, é", maior)
                process.exit()
            }
        }

        let numero_atual = parseInt(resposta)

        if (isNaN(numero_atual)) {
            console.log("Digite um número.")
        } 
        else {
            numeros.push(numero_atual)
        }

        programa()
    })
}

programa()
