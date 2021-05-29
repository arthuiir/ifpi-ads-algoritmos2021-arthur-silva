const entrada = require("prompt-sync")()

// Entrada
const minutos = Number(entrada("Digite os minutos: "))

// Processamento
const hora = Math.floor(minutos / 60)
const resto = minutos % 60

// Saída
console.log(hora, "horas e", resto, "minutos.")