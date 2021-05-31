const entrada = require("prompt-sync")()

// Entrada
const mesesTotal = Number(entrada("Digite o número total de meses: "))

// Processamento
const anos = Math.floor(mesesTotal / 12)
const meses = mesesTotal % 12

// Saída
console.log(anos,"anos e ",meses,"meses.")