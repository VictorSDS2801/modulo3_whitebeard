function celtofah() {
    process.stdout.write("Digite o número, em celsius, para ser transformado em fahrenheit: ")
    process.stdin.once("data", (data) => {
        let numero = parseInt(data.toString().trim())
        if (numero == '' || isNaN(numero)) {
            console.log("Digite um número.")
            celtofah()
        }
        else {
            let equacao = (numero * 1.8) + 32 
            console.log("Essa temperatura, em fahrenheit, é ", equacao)
            conversor()
        }
    })
}
function fahtocel() {
    process.stdout.write("Digite o número, em fahrenheit, para ser transformado em celsius: ")

    process.stdin.once("data", (data) => {
        let numero = parseInt(data.toString().trim())
        if (numero == '' || isNaN(numero)) {
            console.log("Digite um número.")
            fahtocel()
        }
        else {
            let equacao = (numero - 32) / 1.8
            console.log("Essa temperatura, em celsius, é ", equacao)
            conversor()
        }
    })
}

function conversor() {
    process.stdout.write("Bem vindo ao conversor de temperatura!\n" +
        "Digite 1 se você quer transformar de celsius para fahrenheit.\n" +
        "Digite 2 se você quer transformar de fahrenheit para celsuis.\n" +
        "Ou digite 3 para sair."
    )
    process.stdin.once("data", (data) => {
        let decisao = parseInt(data.toString().trim())
        if (isNaN(decisao) || ![1, 2, 3].includes(decisao)) {
            console.log("Digite um número correspondente.")
            conversor()
        }
        else if (decisao == 1) {
            celtofah()
        }
        else if (decisao == 2) {
            fahtocel()
        }
        else if (decisao == 3) {
            process.exit()
        }
    })
}
conversor()