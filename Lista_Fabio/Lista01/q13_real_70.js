const entrada = require("prompt-sync")()

// Entrada
const real = Number(entrada("Digite um valor (R$): "))

// Processamento
const porcentagem = real * 0.7

// Saída
console.log("70% do valor digitado corresponde a R$",porcentagem)