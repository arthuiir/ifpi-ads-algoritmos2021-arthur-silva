const entrada = require("prompt-sync")()

// Entrada
const minutosInt = Number(entrada("Digite um número inteiro de minutos: "))

// Processamento
const dias = Math.floor(minutosInt / 1440)
const minutos = minutosInt % 1440

// Saída
console.log(dias,"dia(s) e",minutos,"minuto(s).")