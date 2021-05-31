const entrada = require("prompt-sync")()

// Entrada
const kilo = Number(entrada("Digite um valor em Kg: "))

// Processamento
const grama = kilo * 1000

// Saída
console.log(kilo,"Kg equivale a ",grama,"grama(s)")