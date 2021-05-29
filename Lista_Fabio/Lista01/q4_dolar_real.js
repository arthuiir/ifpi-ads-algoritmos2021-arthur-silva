const entrada = require("prompt-sync")()

// Entrada
const cotacao = Number(entrada("Digite a cotação atual do dolar: "))
const dolar = Number(entrada("Digite o valor desejado (em dólar): )"))

// Processamento
const real = dolar / cotacao

// Saída
console.log("O valor em real equivale a: R$", real)