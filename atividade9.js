const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let listafunc = []
function menu() {
    console.log("Bem vindo ao cadastro de funcionários!\n")
    console.log("Digite 1 se você deseja cadastrar um novo funcionário.\n")
    console.log("Digite 2 se você deseja ver qual o funcionário com o maior salário.\n")
    console.log("Digite 3 se você deseja ver todos os funcionários cadastrados.\n")
    console.log("Digite 4 se você deseja sair do cadastro de funcionários.\n")
    rl.question("Digite aqui a sua escolha: ", escolha)
}
function escolha(opcao) {
    switch(opcao) {
        case '1':
            addfunc()
            break
        case '2':
            maiorsal()
            break
        case '3':
            listarfunc()
            break
        case '4':
            rl.close()
            break
        default:
            console.log("Digite uma opção válida.")
            menu()
    }
}
function addfunc() {
    rl.question("Digite o nome do funcionário: ", (nome) => {
        rl.question("Digite o cargo do funcionário: ", (cargo) => {
            rl.question("Digite o salário do funcionário:", (salario) => {
                let nomefunc = nome.trim()
                let cargofunc = cargo.trim()
                let salariofunc = parseFloat(salario.trim())

                listafunc.push({nome: nomefunc, cargo: cargofunc, salario: salariofunc})
                menu()
            })
        })
    })
}
function maiorsal() {
    if (listafunc.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }
    let maior = listafunc[0];

    for (let i = 1; i < listafunc.length; i++) {
        if (listafunc[i].salario > maior.salario) {
          maior = listafunc[i];
        }
    }
    console.log("Funcionário com maior salário:");
    console.log(maior);
    programa()
}
function listarfunc() {
    console.log(listafunc)
    menu()
}
menu()