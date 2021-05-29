const entrada = require("prompt-sync")()

// Entrada
const raio = Number(entrada("Digite valor do raio: "))

// Processamento
const comprimento = 2 * Math.PI * raio

// Saída
console.log("O comprimento da circunferência é", comprimento)