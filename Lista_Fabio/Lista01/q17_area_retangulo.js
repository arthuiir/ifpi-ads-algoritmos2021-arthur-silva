const entrada = require("prompt-sync")()

// Entrada
const base = Number(entrada("Digite valor da base do retângulo: "))
const altura = Number(entrada("Digite valor da altura do retângulo: "))

// Processamento
const area = base * altura

// Saída
console.log("A área do retângulo é:",area)