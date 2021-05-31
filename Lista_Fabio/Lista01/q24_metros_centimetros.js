const entrada = require("prompt-sync")()

// Entrada
const metros = Number(entrada("Digite um valor em metros: "))

// Processamento
const centimetros = metros * 100

// Saída
console.log(metros,"metro(s) equivale a ",centimetros,"centímetros")