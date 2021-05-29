const entrada = require("prompt-sync")()

// Entrada
const numero = Number(entrada("Digite um número com três dígitos: "))

// Processamento
const centea = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

// Saída
console.log("O inverso do número é: ",unidade,dezena,centea)