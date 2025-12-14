let numeros = []

function adicao() {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    console.log("O resultado da soma é:", soma)
    process.exit()
}

function subtracao() {
    let resultado = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        resultado -= numeros[i]
    }
    console.log("O resultado da subtração é:", resultado)
    process.exit()
}

function multiplicacao() {
    let resultado = 1
    for (let i = 0; i < numeros.length; i++) {
        resultado *= numeros[i]
    }
    console.log("O resultado da multiplicação é:", resultado)
    process.exit()
}

function divisao() {
    let resultado = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        resultado /= numeros[i]
    }
    console.log("O resultado da divisão é:", resultado)
    process.exit()
}

function lerNumeros(decisao) {
    process.stdin.once("data", (data) => {
        let entrada = data.toString().trim()

        if (entrada.toLowerCase() === "terminei") {

            if (numeros.length === 0) {
                console.log("Você não digitou nenhum número.")
                console.log('Digite pelo menos um número ou "terminei" para sair.')
                lerNumeros(decisao)
                return
            }

            if (decisao === 1) adicao()
            else if (decisao === 2) subtracao()
            else if (decisao === 3) multiplicacao()
            else if (decisao === 4) divisao()

        } 
        else {
            let numero = parseFloat(entrada)

            if (isNaN(numero)) {
                console.log("❌ Entrada inválida. Digite apenas números.")
                console.log('Tente novamente ou digite "terminei".')
                lerNumeros(decisao) // volta a perguntar
            }
            else {
                numeros.push(numero)
                lerNumeros(decisao) // continua lendo
            }
        }
    })
}


function calculadora() {
    process.stdout.write(
        "\nBem vindo a calculadora!\n" +
        "Digite 1 se você quer fazer uma adição.\n" +
        "Digite 2 se você quer fazer uma subtração.\n" +
        "Digite 3 se você quer fazer uma multiplicação.\n" +
        "Digite 4 se você quer fazer uma divisão.\n" +
        "Digite 5 se deseja sair da calculadora.\n"
    )

    process.stdin.once("data", (data) => {
        let decisao = parseInt(data.toString().trim())

        if (![1, 2, 3, 4, 5].includes(decisao)) {
            console.log("\nDigite um número válido.\n")
            calculadora()
        }
        else if (decisao === 5) {
            process.exit()
        }
        else {
            process.stdout.write(
                'Digite os números um por vez. Quando terminar, digite "terminei": '
            )
            lerNumeros(decisao)
        }
    })
}

calculadora()
