const entrada = require("prompt-sync")()

// Entrada
const kilometro = Number(entrada("Digite um valor em Km: "))

// Processamento
const metros = kilometro * 1000

// Saída
console.log(kilometro,"Km corresponde a",metros,"metros")