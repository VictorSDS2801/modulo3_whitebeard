let lista = []

function programa() {
    process.stdout.write(
        "Bem vindo a sua lista de compras!\n" +
        "Digite 1 se você deseja adicionar um novo item.\n" +
        "Digite 2 se você deseja remover um item.\n" +
        "Digite 3 se você deseja marcar um item como comprado.\n" +
        "Digite 4 se você deseja listar todos os itens.\n" +
        "Digite 5 se você deseja sair da lista de compras.\n"
    )

    process.stdin.once("data", (data) => {
        let decisao = parseInt(data.toString().trim())

        if (isNaN(decisao) || ![1, 2, 3, 4, 5].includes(decisao)) {
            console.log("Digite um número correspondente.")
            return programa()
        }

        switch (decisao) {
            case 1:
                additem()
                break
            case 2:
                removeitem()
                break
            case 3:
                marcaritem()
                break
            case 4:
                listaritens(lista)
                break
            case 5:
                process.exit()
        }
    })
}

function additem() {
    process.stdout.write("Digite aqui o nome do item: ")

    process.stdin.once("data", (data) => {
        let nome = data.toString().trim()

        if (nome === '') {
            console.log("Digite o nome do produto.")
            return additem()
        }

        perguntarpreco(nome)
    })
}

function perguntarpreco(nome) {
    process.stdout.write("Digite agora o preço do produto: ")

    process.stdin.once("data", (data) => {
        let preco = parseInt(data.toString().trim())

        if (isNaN(preco)) {
            console.log("Digite um preço válido.")
            return perguntarpreco(nome)
        }

        lista.push({ nome, preco, comprado: false })
        console.log("Item adicionado com sucesso!\n")
        programa()
    })
}
function removeitem() {
    process.stdout.write("Digite o nome do item que você quer remover: ")

    process.stdin.once("data", (data) => {
        let nomeitem = data.toString().trim()
        lista = lista.filter(item => item.nome !== nomeitem);
        console.log("Item removido com sucesso!")
        programa()
    })
}
function marcaritem() {
    process.stdout.write("Digite o nome do item que você deseja marcar como comprado: ")

    process.stdin.once("data", (data) => {
        let nomeitem = data.toString().trim()
        let itemEncontrado = false
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].nome === nomeitem) {
                lista[i].comprado = true
                itemEncontrado = true
                break
            }
        }
        if (itemEncontrado) {
            console.log("Item marcado como comprado!\n")
        } else {
            console.log("Item não encontrado na lista.\n")
        }
        programa()
    })
}

function listaritens(lista) {
    console.log(lista)
    programa()
}
programa()