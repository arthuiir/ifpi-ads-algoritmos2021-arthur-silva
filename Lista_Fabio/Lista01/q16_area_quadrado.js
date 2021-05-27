const entrada = require('prompt-sync')()

// Entrada
const lado = Number(entrada("Digite o lado do quadrado: "))

// Processamento
const area = Math.pow(lado, 2)

// Saída
console.log("Área: ", area)