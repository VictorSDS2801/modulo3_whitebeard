function fatorial(numero) {
    let resultado = 1
    for (let i = numero; i > 0; i--) {
        resultado *= i
    }
    return resultado
}

function programa() {
    process.stdout.write("Digite um número aqui para verificar seu fatorial: ")
    process.stdin.once("data", (data) => {
        let numero = parseInt(data.toString().trim())
        if (isNaN(numero)) {
            console.log("Digite um número.")
            programa()
            return
        }
        console.log("O resultado do fatorial do número " + numero + " é", fatorial(numero))
        process.exit()
    })
}
programa()