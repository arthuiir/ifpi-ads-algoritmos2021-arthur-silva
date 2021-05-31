const entrada = require("prompt-sync")()

// Entrada
const numero = Number(entrada("Digite um numero com três dígitos: "))

// Processamento
const centena = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const inverso = (unidade * 100) + (dezena * 10) + (centena * 1)
const diferenca = numero - inverso

// Saída
console.log("A difereça entre",numero,"e",inverso,"é",diferenca)