const entrada = require("prompt-sync")()

// Entrada
const numero1 = Number(entrada("Digite um número:"))
const numero2 = Number(entrada("Digite outro número:"))
const numero3 = Number(entrada("Digite mais um número:"))

// Processamento
const media = (numero1 + numero2 + numero3) / 3

// Saída
console.log("A média dos números é ",media)