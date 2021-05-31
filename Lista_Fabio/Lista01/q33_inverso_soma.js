const entrada = require("prompt-sync")()

// Entrada
const numero = Number(entrada("Digite um número com três dígitos: "))

// Processamento
const centena = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10
const inverso = (unidade * 100) + (dezena * 10) + (centena * 1)
const soma = numero + inverso

// Saída
console.log("A soma de",numero,"com o seu inverso é",soma)