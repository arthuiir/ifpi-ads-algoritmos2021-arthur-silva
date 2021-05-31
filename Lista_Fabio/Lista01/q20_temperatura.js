const entrada = require("prompt-sync")()

// Entrada
const temperaturaC = Number(entrada("Digite a temperatura em °C: "))

// Processamento
const temperaturaF = (9 * temperaturaC + 160) / 5

// Saída
console.log("A temperatura equivalente em °F é",temperaturaF)