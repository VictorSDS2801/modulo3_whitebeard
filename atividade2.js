function tabuada(numero) {
    for (let i = 1; i < 11; i++) {
        console.log(numero + " x " + i + " =", numero * i)
    }
    process.exit()
}

function programa() {
    process.stdout.write("Digite aqui um número inteiro para ver sua tabuada de multiplicação: ")

    process.stdin.once("data", (data) => {
        let numero = data.toString().trim()
        if (isNaN(Number(numero))) {
            console.log("Digite um número inteiro.")
            programa()
        }
        else {
            parseInt(numero)
            tabuada(numero)
        }
    })
}
programa()