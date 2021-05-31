const entrada = require("prompt-sync")()

// Entrada
const temperaturaF = Number(entrada("Digite a temperatura em °F: "))

// Processamento
const temperaturaC = (5 * temperaturaF - 160) / 9

// Saída
console.log(temperaturaF,"°F coresponde a",temperaturaC,"°C")