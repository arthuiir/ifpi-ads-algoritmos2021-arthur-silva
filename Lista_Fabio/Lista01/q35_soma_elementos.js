const entrada = require("prompt-sync")()

// Entrada
const numero = Number(entrada("Digite um número de 3 dígitos: "))

// Processamento
const centena = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const unidade1 = centena * 1
const unidade2 = dezena * 1
const unidade3 = unidade * 1

const soma_elementos = unidade1 + unidade2 + unidade3

// Processamento
console.log(soma_elementos)