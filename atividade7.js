function fibonacci(numero) {
    let sequencia = []

    if (numero <= 0) { 
        return sequencia
    }
    if (numero >= 1) { 
        sequencia.push(0)
    }
    if (numero >= 2) {
        sequencia.push(1)
    }

    for (let i = 2; i < numero; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2])
    }

    return sequencia
}

function programa() {
    process.stdout.write("Digite aqui um número máximo para saber os primeiros números da sequencia da fibonacci, até o número máximo: ")
    process.stdin.once("data", (data) => {
        let numero = parseInt(data.toString().trim())
        if (isNaN(numero)) {
            console.log("Digite um número.")
            programa()
            return
        }
        console.log("Os primeiros " + numero + " números da sequência de fibonacci são:", fibonacci(numero))
        process.exit()
    })
}
programa()