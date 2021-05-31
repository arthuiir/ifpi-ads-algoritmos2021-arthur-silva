const entrada = require("prompt-sync")()

// Entrada
const raio = Number(entrada("Digite o valor do raio da esfera: "))

// Processamento
const volume = (4 * Math.PI * raio ** 3)

// Saída
console.log("O volume da esfera é",volume)