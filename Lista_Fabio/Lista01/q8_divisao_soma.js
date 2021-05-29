const entrada = require("prompt-sync")()

// Entrada
const numero1 = Number(entrada("Digite um número: "))
const numero2 = Number(entrada("Digite mais um número: "))

// Processamento
const soma = numero1 + numero2
const subtracao = numero1 - numero2
const divisao = soma / subtracao

// Saída
console.log(divisao)