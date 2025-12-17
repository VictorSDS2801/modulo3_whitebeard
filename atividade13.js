let populacaoA = 80000
let populacaoB = 200000

let aumentoanualA = 0.03
let aumentoanualB = 0.015

let ano = 0

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * aumentoanualA
    populacaoB += populacaoB * aumentoanualB
    ano++

    console.log("No ano " + ano + ", o crescimento populacional de A foi " + Math.round(populacaoA) + ", e o crescimento da populacao B foi " + Math.round(populacaoB))
}

console.log("Serão necessários " + ano + " anos para a população A se igualar ou ficar maior que a população B")