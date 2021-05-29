const entrada = require("prompt-sync")()

// Entrada
const numero = Number(entrada("Digite doi número (dois dígitos):"))

// Processamento
const dezena = Math.floor(numero / 10)
const unidade = numero % 10

// Saída
console.log("O valor inverso é",unidade,dezena)