const entrada = require("prompt-sync")()

// Entrada
const base = Number(entrada("Digite o valor da base do triângulo: "))
const altura = Number(entrada("Digite o valor da altura do triângulo: "))

// Processamento
const area = (base * altura) / 2

// Saída
console.log("A área do triângulo é:",area)